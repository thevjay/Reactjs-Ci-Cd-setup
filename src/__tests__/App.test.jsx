import { fireEvent, render, screen } from '@testing-library/react'; 
import App from '../App';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';

test('renders a component', () => {
  render(<App/>);
  const linkElement = screen.getByText(/count/i); // Adjust the text based on actual content
  expect(linkElement).toBeInTheDocument();
});

test('increaments count on button click',()=>{
  render(<App/>);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');

})