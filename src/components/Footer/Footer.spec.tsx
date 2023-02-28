import React from 'react';
import { render } from "@testing-library/react"
//import userEvent from '@testing-library/user-event';
import Footer from './Footer'

describe('Footer tests', () => {
    it("Footer renders", () => {
        const { getByTestId, getByText } = render(<Footer />);
		expect(getByText('2014')).toBeInTheDocument();
        expect(getByText('Marvel.')).toBeInTheDocument();
        
    })
})

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import React from 'react';
// import Footer from './Footer'


// describe("Button Component", () => {
// 	let count;

// 	beforeEach(() => count = 1);

// 	it('Renders the proper label for the button', () => {
// 		const { getByText } = render(<Button label="test button" />);
// 		expect(getByText('test button')).toBeInTheDocument();
// 	})

// 	it('Disables button properly', () => {
// 		const { getByTestId } = render(<Button disabled={true} label="test" onClick={() => count = 2} />);
// 		userEvent.click(getByTestId('button'));
// 		expect(count).toBe(1);
// 	})

// 	it('Correctly calls click handler', () => {
// 		let count = '';
// 		const makeCount = jest.fn(() => count = 2);
// 		const { getByTestId } = render(<Button label="test" onClick={makeCount} />);
// 		userEvent.click(getByTestId('button'));
// 		expect(count).toBe(2);
// 		expect(makeCount).toHaveBeenCalled()
// 	})

// 	it('Theme provides correct colors', () => {
// 		const { getByText } = render(<Button label="test button" buttonTheme="light" />);
// 		const backgroundColor = 'white';
// 		const fontColor = 'denimBlue';
// 		expect(getByText('test button')).toHaveStyleRule('background-color', backgroundColor);
// 		expect(getByText('test button')).toHaveStyleRule('color', fontColor);
// 	});
// });
