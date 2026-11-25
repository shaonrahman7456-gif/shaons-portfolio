import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, ArrowUpRight, Github, Linkedin, Facebook, Mail, MapPin, Phone, Code2, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from './data'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'

const links = [
  ['/', 'Home'], ['/skills', 'Skills'], ['/education', 'Education & Achievements'],
  ['/hobbies', 'Hobbies & Interests'], ['/contact', 'Contact']
]

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  return <header className="header">
    <div className="nav-wrap">
      <NavLink to="/" className="brand"><span className="brand-mark">S</span><span>Shaon<span className="brand-dot">.</span></span></NavLink>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>
}

function Footer() {
  return <footer className="footer">
    <div><span className="brand"><span className="brand-mark">S</span> Shaon<span className="brand-dot">.</span></span><p>Building skills, creating projects, and learning every day.</p></div>
    <div className="footer-social">
      <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
      <a href={personal.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a>
      <a href={`mailto:${personal.email}`} aria-label="Email"><Mail/></a>
    </div>
    <small>© {new Date().getFullYear()} Saipur Rahman Shaon. All rights reserved.</small>
  </footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('shaon-theme') || 'light')
  const location = useLocation()
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('shaon-theme', theme)
  }, [theme])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return <div className="app-shell">
    <Header theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
    <AnimatePresence mode="wait">
      <motion.main key={location.pathname} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.22}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/hobbies" element={<Hobbies/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </motion.main>
    </AnimatePresence>
    <Footer/>
  </div>
}