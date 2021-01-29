import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RelativeLink from './RelativeLink';
import RelativeRouter from '../RelativeRouter/RelativeRouter';

test('renders a link with the to prop appended to the original path', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RelativeRouter url="/test">
        <RelativeLink to="/login">Test</RelativeLink>
      </RelativeRouter>
    </MemoryRouter>
  );

  expect(getByText('Test').href).toEqual('http://localhost/test/login');
});
