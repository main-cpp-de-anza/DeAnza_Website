import { render, screen } from '@testing-library/react'
import Registration from './Registration'
import Transferring from './Transferring'
import VtaCard from './VtaCard'
import CampusMap from './CampusMap'
import AboutUs from './AboutUs'

test('shows registration guidance', () => {
  render(<Registration />)
  expect(screen.getByRole('heading', { name: /priority registration/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /general education/i })).toBeInTheDocument()
  expect(screen.getByAltText('MyPortal registration screen')).toBeInTheDocument()
  expect(screen.getByAltText('Student Registration Dashboard')).toBeInTheDocument()
  expect(screen.getByAltText('Degree Works What-if guidance')).toBeInTheDocument()
})

test('shows transfer resources and TAG eligibility', () => {
  render(<Transferring />)
  expect(screen.getByRole('heading', { name: 'ASSIST' })).toBeInTheDocument()
  expect(screen.getByText(/UC Berkeley, UCLA, and UC San Diego do not offer TAG/i)).toBeInTheDocument()
})

test('shows the VTA document requirement', () => {
  render(<VtaCard />)
  expect(screen.getByText(/passport or driver license/i)).toBeInTheDocument()
})

test('opens the De Anza location in a new tab', () => {
  render(<CampusMap />)
  expect(screen.getByRole('link', { name: /de anza location/i })).toHaveAttribute('target', '_blank')
})

test('renders the Main.cpp mission and contact section', () => {
  render(<AboutUs />)
  expect(screen.getByRole('heading', { name: 'Main.cpp' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /our contact information/i })).toBeInTheDocument()
})
