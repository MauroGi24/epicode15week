import { findAllByTestId, fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import App from './App'

test('il componente welcome è montato correttamente test1', () => {
    render(<App />)

    const welcomeComponent = screen.getByText(/welcome/i);

    expect(welcomeComponent).toBeInTheDocument();
})





