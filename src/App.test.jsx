import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
     const { container } = render(<App />)
    const element = container.querySelector('.framewor')
    // Asserts that an element is in the document
    expect(element).toBeInTheDocument()
  })
})