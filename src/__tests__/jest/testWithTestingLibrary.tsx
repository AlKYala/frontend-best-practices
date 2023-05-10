import { render, screen, fireEvent } from '@testing-library/react';
import React, { Component, useState } from 'react';

/**
 * Mit React Testing Library testest du komponentne. 
 * Du musst diese Rendern. 
 * Dann kannst du z.B: pruefen:
 * -> Sind Knoten im Dok?
 * -> Du kannst Elemente rausnehmen und nach dem Namen gucken 
 * -> Du kannst Button clicks simulieren etc. 
 * 
 * Man kann viel damit machen. Lies dir die Doku durch.
 * 
 * Warum RTL?
 * Weil Enzyme tot ist scheinbar. 
 * 
 */


function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


describe('Counter', () => {


  it('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
  });
});