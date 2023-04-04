import React from 'react';
import { render } from "@testing-library/react"
import Footer from './Footer'

describe('Footer tests', () => {
    it("Footer renders", () => {
        const { getByTestId, getByText } = render(<Footer />);
		expect(getByText('2014')).toBeInTheDocument();
        expect(getByText('Marvel.')).toBeInTheDocument();
    })
})
