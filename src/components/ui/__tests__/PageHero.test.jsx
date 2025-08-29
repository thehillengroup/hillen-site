import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHero from '../../ui/PageHero';

test('renders title, accent, and description', () => {
  render(<PageHero title="Cyber" accent="Operations" description="Defend all the things." />);
  expect(screen.getByRole('heading', { level: 1, name: /Cyber Operations/i })).toBeInTheDocument();
  expect(screen.getByText(/Defend all the things\./i)).toBeInTheDocument();
});
