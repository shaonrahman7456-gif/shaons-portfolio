import { GraduationCap, Award, CalendarDays, MapPin } from 'lucide-react'
import { achievements } from '../data'

export default function Education() {
  return <div className="page inner-page">
    <section className="page-hero"><p className="eyebrow">MY ACADEMIC JOURNEY</p><h1>Education & <span className="gradient-text">Achievements</span></h1><p className="lead">Every learning experience adds something valuable to the person and developer I am becoming.</p></section>
    <section className="section">
      <div className="section-heading"><p className="eyebrow">EDUCATION</p><h2>Academic <span className="gradient-text">Background</span></h2></div>
      <div className="timeline"><div className="timeline-item"><div className="timeline-icon"><GraduationCap/></div><div className="timeline-content"><span className="tag">BACHELOR'S DEGREE</span><h3>B.Sc. in Engineering</h3><h4>Daffodil International University</h4><p>Currently pursuing my undergraduate engineering degree, developing a foundation in computer science, programming, and software development.</p><div className="meta-line"><MapPin size={15}/> Dhaka, Bangladesh <span>·</span><CalendarDays size={15}/> Current</div></div></div></div>
    </section>
    <section className="section">
      <div className="section-heading"><p className="eyebrow">MILESTONES</p><h2>Certificates & <span className="gradient-text">Achievements</span></h2></div>
      <div className="achievement-grid">{achievements.map((a,i)=><article className="achievement-card" key={a.title}><div className="achievement-image"><img src={a.image} alt={a.title}/></div><div className="achievement-body"><span className="tag"><Award size={13}/> ACHIEVEMENT 0{i+1}</span><h3>{a.title}</h3><h4>{a.subtitle}</h4><p>{a.description}</p></div></article>)}</div>
    </section>
  </div>
}