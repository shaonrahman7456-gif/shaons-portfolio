import { Code2, Layers3, Wrench, ArrowUpRight } from 'lucide-react'
import { skills, projects } from '../data'

export default function Skills() {
  return <div className="page inner-page">
    <section className="page-hero"><p className="eyebrow">WHAT I WORK WITH</p><h1>Skills & <span className="gradient-text">Projects</span></h1><p className="lead">Technologies I'm learning and using to build practical projects. I'm always working to improve my foundation and explore new tools.</p></section>
    <section className="section skills-section">
      <div className="section-heading"><p className="eyebrow">MY TOOLKIT</p><h2>Technical <span className="gradient-text">Skills</span></h2></div>
      <div className="skill-grid">{skills.map((s,i)=><div className="skill-card" key={s.name}><div className="skill-icon"><Code2/></div><div><h3>{s.name}</h3><p>{s.level}</p></div><span className="skill-number">0{i+1}</span></div>)}</div>
      <div className="note-card"><Layers3/><div><h3>Always learning</h3><p>My current goal is to become stronger in React, JavaScript, TypeScript, responsive UI development, and software engineering fundamentals.</p></div></div>
    </section>
    <section className="section">
      <div className="section-heading"><p className="eyebrow">LEARNING BY DOING</p><h2>My <span className="gradient-text">Projects</span></h2></div>
      <div className="all-projects">{projects.map((p,i)=><article className="project-row" key={p.title}><div className="project-row-image"><img src={p.image} alt={p.title}/></div><div><small>{p.category} · PROJECT 0{i+1}</small><h3>{p.title}</h3><p>{p.description}</p></div><ArrowUpRight className="project-arrow"/></article>)}</div>
    </section>
  </div>
}