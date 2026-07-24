import { NavLink } from 'react-router-dom'

const navigation = [
  ['/registration', 'Student Registration'],
  ['/transferring', 'Transferring'],
  ['/vta-card', 'VTA Card'],
  ['/campus-map', 'Campus Map'],
  ['/about', 'About Us'],
]

export default function Navbar() {
  return <header className="site-nav"><NavLink className="brand" to="/" aria-label="De Anza home">DA</NavLink><nav aria-label="Primary navigation">{navigation.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></header>
}
