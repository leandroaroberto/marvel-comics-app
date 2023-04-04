import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header'

describe('Header', () => {
    it('Header mounts with the correct text', () => {
        const { getByText } = render(<Header>My Header</Header>)
        expect(getByText('My Header')).toBeInTheDocument()
    })
})
