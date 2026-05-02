'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('failed');
      toast.success('Message sent. Thank you!');
      setDone(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error('Could not send. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return <div className="mt-6 p-6 rounded-md bg-accent text-primary text-center"><p className="font-display font-semibold">Thank you!</p><p className="text-sm mt-1">Your message has been received. We'll get back to you soon.</p><button onClick={() => setDone(false)} className="mt-3 text-sm underline">Send another</button></div>;
  }

  const inputCls = 'w-full pl-10 pr-3 py-2.5 rounded-md bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <form onSubmit={onSubmit} className="mt-5 space-y-4">
      <div className="relative">
        <User className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
        <input required name="name" placeholder="Your name" className={inputCls} />
      </div>
      <div className="relative">
        <Mail className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
        <input required type="email" name="email" placeholder="Email address" className={inputCls} />
      </div>
      <div className="relative">
        <Phone className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
        <input name="phone" placeholder="Phone (optional)" className={inputCls} />
      </div>
      <div className="relative">
        <MessageSquare className="w-4 h-4 absolute left-3 top-3.5 text-muted-foreground" />
        <input name="subject" placeholder="Subject" className={inputCls} />
      </div>
      <div className="relative">
        <textarea required name="message" placeholder="Your message" rows={5} className="w-full px-3 py-2.5 rounded-md bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <p className="text-xs text-muted-foreground">Privacy: your details are stored only to respond to your inquiry.</p>
      <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60 shadow">
        <Send className="w-4 h-4" /> {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
