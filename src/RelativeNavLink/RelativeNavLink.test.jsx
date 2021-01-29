import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RelativeNavLink from './RelativeNavLink';
import RelativeRouter from '../RelativeRouter/RelativeRouter';

test('renders a link with the to prop appended to the original path', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RelativeRouter match={{ url: '/test' }}>
        <RelativeNavLink to="/login">Test</RelativeNavLink>
      </RelativeRouter>
    </MemoryRouter>
  );

  expect(getByText('Test').href).toEqual('http://localhost/test/login');
});
