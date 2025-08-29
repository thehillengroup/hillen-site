import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServiceCard from '../../ui/ServiceCard';

const Icon = () => <svg data-testid="icon" />;

test('renders title and description', () => {
  const { container } = render(
    <ServiceCard id="x" title="Title" desc="Desc" Icon={Icon} aosDelay={160} />,
    { wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter> }
  );
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Desc')).toBeInTheDocument();
  expect(container.querySelector('li')?.getAttribute('data-aos-delay')).toBe('160');
});

test('wraps in Link when href provided', () => {
  render(
    <ServiceCard id="y" title="With Link" desc="Has href" Icon={Icon} href="/go" />,
    { wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter> }
  );
  const link = screen.getByRole('link', { name: /With Link/i });
  expect(link).toHaveAttribute('href', '/go');
});

test('no Link when href missing', () => {
  render(
    <ServiceCard id="z" title="No Link" desc="No href" Icon={Icon} />,
    { wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter> }
  );
  // should not find a link with that title
  expect(screen.queryByRole('link', { name: /No Link/i })).not.toBeInTheDocument();
});
