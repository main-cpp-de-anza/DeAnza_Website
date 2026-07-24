import { Link } from 'react-router-dom'
export default function InfoCard({ to, title, description }) { return <Link className="info-card" to={to}><h2>{title}</h2><p>{description}</p><span>Explore →</span></Link> }
