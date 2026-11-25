import profile from './assets/profile.jpg'
import canteen from './assets/canteen.png'
import network from './assets/network.png'
import security from './assets/security.png'
import rail from './assets/rail-crossing.png'
import marathon from './assets/marathon.jpg'
import aws from './assets/aws.png'
import beach from './assets/beach.jpg'
import garden from './assets/gardening.jpg'
import sports from './assets/sports.jpg'
import movies from './assets/movies.jpg'

export const personal = {
  name: 'Saipur Rahman Shaon',
  role: 'Aspiring Software & Web Developer',
  email: 'shaonrahman7456@gmail.com',
  phone: '0163103461',
  hometown: 'Ramgonj, Lakshmipur, Bangladesh',
  location: 'Mirpur 1, Dhaka, Bangladesh',
  github: 'https://github.com/shaonrahman7456-gif',
  facebook: 'https://www.facebook.com/',
  profile,
}

export const skills = [
  { name: 'HTML5', level: 'Web structure' },
  { name: 'CSS3', level: 'Styling & responsive layouts' },
  { name: 'JavaScript', level: 'Programming & interactivity' },
  { name: 'Tailwind CSS', level: 'Utility-first styling' },
  { name: 'React', level: 'Component-based UI' },
  { name: 'TypeScript', level: 'Typed JavaScript' },
]

export const projects = [
  { title: 'Canteen Management System', category: 'Web Development', image: canteen, description: 'A university canteen solution focused on food ordering, food quality, and online payment. My contribution included backend development and testing using Java.' },
  { title: 'Design and Implementation of a Secure Telecommunication Company Network', category: 'Networking', image: network, description: 'A network design project representing a secure telecommunication company infrastructure with segmented network zones and connected departments.' },
  { title: 'Operating System Security Protection', category: 'Cybersecurity', image: security, description: 'A desktop file encryption and decryption tool with password-based protection and AES encryption.' },
  { title: 'Rail Crossing – A Living Landscape', category: 'Computer Graphics', image: rail, description: 'A Python/Pygame simulation featuring a railway crossing environment, moving vehicles, train activity, and interactive controls.' },
]

export const achievements = [
  { title: '25th DIU Founding Anniversary Run 2026', subtitle: '5K Finisher', image: marathon, description: 'Completed the 5-kilometre run and received a finisher medal.' },
  { title: 'AWS Academy Graduate', subtitle: 'AWS Academy Cloud Foundations', image: aws, description: 'Completed the AWS Academy Cloud Foundations course (20 course hours).' },
]

export const interests = [
  { title: 'Gardening', image: garden, text: 'I love gardening and enjoy taking care of my own rooftop garden. It gives me a refreshing break from technology and everyday work.' },
  { title: 'Sports', image: sports, text: 'I enjoy sports, especially playing and following different games. Sports keep me active, disciplined, and connected with friends.' },
  { title: 'Movies', image: movies, text: 'Watching movies is one of my favourite ways to relax. I enjoy stories from different genres, especially memorable dramas, thrillers, and romantic films.' },
  { title: 'Tour & Travel', image: beach, text: 'I love travelling with friends, exploring new places, meeting people, and experiencing nature. Travelling helps me refresh my mind and collect memories.' },
]