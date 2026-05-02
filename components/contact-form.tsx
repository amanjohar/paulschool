'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <div className="mt-6 p-6 rounded-md bg-accent text-primary text-center"><p className="font-display font-semibold">Thank you!</p><p className="text-sm mt-1">Your message has been received. We'll get back to you soon.</p><button onClick={() => setDone(false)} className="mt-3 text-sm underline">Send another</button></div>;
  }

  const inputCls = 'w-full pl-10 pr-3 py-2.5 rounded-md bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <form action="mailto:contact@paulschool.com" method="post" enctype="text/plain" onSubmit={() => setDone(true)} className="mt-5 space-y-4">
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
      <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 shadow">
        <Send className="w-4 h-4" /> Send Message
      </button>
    </form>
  );
}
