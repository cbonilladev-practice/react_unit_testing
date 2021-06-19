import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello Laverne as a text', () => {
	//Arrange
	render(<Greeting />);

	//Act
	// ...nothing

	//Assert
	const helloWorldElement = screen.getByText('Hello Laverne')
	expect(helloWorldElement).toBeInTheDocument()
})