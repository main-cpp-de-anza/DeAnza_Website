import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

test('links each home card to its information page', () => {
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByRole('link', { name: /student registration/i })).toHaveAttribute('href', '/registration')
  expect(screen.getByRole('link', { name: /campus map/i })).toHaveAttribute('href', '/campus-map')
})
