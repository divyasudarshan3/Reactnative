import React from 'react';
import { render, screen } from '@testing-library/react';
import App1 from './App1';
test('render h1 element', () => {
    render(<App1 />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });