import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const message = String(body?.message ?? '').trim();
    if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: body?.phone ? String(body.phone) : null,
        subject: body?.subject ? String(body.subject) : null,
        message,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
