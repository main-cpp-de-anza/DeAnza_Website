import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

test('uses the corrected About Us navigation label and route', () => {
  render(<MemoryRouter><Navbar /></MemoryRouter>)
  expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '/about')
  expect(screen.queryByText('Navigation Bar')).not.toBeInTheDocument()
})
