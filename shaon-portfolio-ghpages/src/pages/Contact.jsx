import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Facebook, Send, Linkedin } from 'lucide-react'
import { personal } from '../data'

export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:''})
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = e => {
    e.preventDefault()
    const body = `Hi Shaon,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio enquiry')}&body=${body}`
  }
  return <div className="page inner-page">
    <section className="page-hero"><p className="eyebrow">LET'S CONNECT</p><h1>Get in <span className="gradient-text">Touch</span></h1><p className="lead">Have a question, opportunity, or just want to say hello? I'd be happy to hear from you.</p></section>
    <section className="section contact-layout">
      <div className="contact-info"><h2>Let's start a <span className="gradient-text">conversation.</span></h2><p>I'm interested in web development, software projects, learning opportunities, and connecting with people in technology.</p>
        <a className="contact-method" href={`mailto:${personal.email}`}><span><Mail/></span><div><small>EMAIL ME</small><b>{personal.email}</b></div></a>
        <a className="contact-method" href={`tel:${personal.phone}`}><span><Phone/></span><div><small>CALL ME</small><b>{personal.phone}</b></div></a>
        <div className="contact-method"><span><MapPin/></span><div><small>LOCATION</small><b>{personal.location}</b></div></div>
        <div className="contact-social"><a href={personal.github} target="_blank" rel="noreferrer"><Github/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/></a><a href={personal.facebook} target="_blank" rel="noreferrer"><Facebook/></a></div>
      </div>
      <form className="contact-form" onSubmit={submit}><h3>Send me a message</h3><label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Enter your name"/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com"/></label><label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What is this about?"/></label><label>Message<textarea name="message" rows="5" value={form.message} onChange={update} required placeholder="Write your message..."/></label><button className="btn btn-primary" type="submit">Send message <Send size={16}/></button><small className="form-hint">This opens your email app with the message prepared.</small></form>
    </section>
  </div>
}