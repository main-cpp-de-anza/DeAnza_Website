import InfoCard from '../components/InfoCard'
const cards = [
  ['/registration', 'Student Registration', 'Plan your classes and complete registration steps.'],
  ['/transferring', 'Transferring Information', 'Explore ASSIST, TAG, and transfer resources.'],
  ['/vta-card', 'VTA Card', 'Learn how to use your student SmartPass.'],
  ['/campus-map', 'Campus Map', 'Find campus buildings, services, and parking.'],
]
export default function Home() { return <div className="page-shell home"><section className="home-hero"><p className="eyebrow">De Anza College</p><h1>Welcome to De Anza College</h1><p>We are here to help you prepare for your study at De Anza College.</p></section><section className="card-grid" aria-label="Student resources">{cards.map(([to, title, description]) => <InfoCard key={to} to={to} title={title} description={description} />)}</section></div> }
