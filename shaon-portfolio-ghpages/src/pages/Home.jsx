import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Github, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { personal, projects } from '../data'

export default function Home() {
  return <div className="page">
    <section className="hero section">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
        <p className="hello">Hello, I'm</p>
        <h1>Saipur Rahman<br/><span className="gradient-text">Shaon.</span></h1>
        <h2>Aspiring Software & Web Developer</h2>
        <p className="lead">I'm a B.Sc. in Engineering student at Daffodil International University, passionate about building useful digital experiences and continuously learning new technologies.</p>
        <div className="hero-buttons">
          <Link className="btn btn-primary" to="/contact">Let's talk <ArrowUpRight size={17}/></Link>
          <Link className="btn btn-secondary" to="/skills">Explore my skills</Link>
        </div>
        <div className="hero-social"><a href={personal.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><span>Dhaka, Bangladesh</span></div>
      </div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.5}}>
        <div className="portrait-frame"><img src={personal.profile} alt="Saipur Rahman Shaon"/></div>
        <div className="floating-card card-code"><Code2 size={18}/><span>Code. Learn. Build.</span></div>
        <div className="floating-card card-student"><Sparkles size={17}/><span>CSE Student</span></div>
        <div className="decor decor-one"/><div className="decor decor-two"/>
      </motion.div>
    </section>
    <section className="intro-strip">
      <div><strong>01</strong><span>Curious learner</span></div><div><strong>02</strong><span>Project focused</span></div><div><strong>03</strong><span>Future developer</span></div>
    </section>
    <section className="section about-preview">
      <div className="section-heading"><p className="eyebrow">A LITTLE INTRODUCTION</p><h2>About <span className="gradient-text">Me</span></h2></div>
      <div className="about-grid"><p className="lead">I enjoy turning ideas into practical projects. My learning journey spans frontend development, programming, networking, and security. I’m currently focused on strengthening my web development skills and growing into a professional software developer.</p><div className="quick-facts"><p><b>Based in</b><span>Mirpur 1, Dhaka</span></p><p><b>Hometown</b><span>Ramgonj, Lakshmipur</span></p><p><b>Education</b><span>Daffodil International University</span></p></div></div>
      <Link className="text-link" to="/education">More about my journey <ArrowUpRight size={17}/></Link>
    </section>
    <section className="section featured">
      <div className="section-heading row-heading"><div><p className="eyebrow">SOME THINGS I'VE BUILT</p><h2>Featured <span className="gradient-text">Projects</span></h2></div><Link className="text-link" to="/skills">Explore skills <ArrowUpRight size={17}/></Link></div>
      <div className="project-grid">{projects.slice(0,3).map((p,i)=><article className="project-card" key={p.title}><div className="project-image"><img src={p.image} alt={p.title}/><span>0{i+1}</span></div><div className="project-info"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p></div></article>)}</div>
    </section>
    <div className="bottom-cta"><div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let's create something<br/>meaningful together.</h2></div><Link className="btn btn-light" to="/contact">Get in touch <ArrowUpRight size={17}/></Link></div>
  </div>
}