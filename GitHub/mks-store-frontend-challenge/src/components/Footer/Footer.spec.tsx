import { render } from '@testing-library/react'
import Footer from '.'

it('render footer', () => {
  const { debug } = render(<Footer />)
  debug()
})
