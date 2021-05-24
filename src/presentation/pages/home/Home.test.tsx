import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from 'presentation/pages/home/Home';

test('renders Home', () => {
  render(<Home />);
  const text = screen.getByText(/OAuth/i);
  expect(text).toBeInTheDocument();
});
