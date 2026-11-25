import { interests } from '../data'
import { Heart, Leaf, Trophy, Film, Plane } from 'lucide-react'

const icons = [Leaf, Trophy, Film, Plane]
export default function Hobbies() {
  return <div className="page inner-page">
    <section className="page-hero"><p className="eyebrow">LIFE BEYOND THE SCREEN</p><h1>Hobbies & <span className="gradient-text">Interests</span></h1><p className="lead">I believe a good life is about curiosity, balance, and experiences. These are some of the things I enjoy outside my academic and technical work.</p></section>
    <section className="section interest-grid">{interests.map((item,i)=>{const Icon=icons[i];return <article className="interest-card" key={item.title}><div className="interest-image"><img src={item.image} alt={item.title}/><span><Icon size={19}/></span></div><div className="interest-copy"><p className="eyebrow">0{i+1} / PERSONAL INTEREST</p><h2>{item.title}</h2><p>{item.text}</p></div></article>})}</section>
    <div className="quote-panel"><Heart/><p>“Keep learning, stay curious, and make time for the things that make life meaningful.”</p><span>— My personal philosophy</span></div>
  </div>
}