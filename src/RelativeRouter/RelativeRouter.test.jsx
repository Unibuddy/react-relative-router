import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RelativeRoute from '../RelativeRoute/RelativeRoute';
import RelativeSwitch from '../RelativeSwitch/RelativeSwitch';
import RelativeRouter from './RelativeRouter';
import { MemoryRouter } from 'react-router';

test('correctly initializes with an empty initial url', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['']}>
      <RelativeRouter>
        <RelativeSwitch>
          <RelativeRoute path="/test">test</RelativeRoute>
          <RelativeRoute path="/">home</RelativeRoute>
        </RelativeSwitch>
      </RelativeRouter>
    </MemoryRouter>
  );

  getByText('home');
});

test('correctly initializes with an initial url with just a "/"', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <RelativeRouter>
        <RelativeSwitch>
          <RelativeRoute path="/test">test</RelativeRoute>
          <RelativeRoute path="/">home</RelativeRoute>
        </RelativeSwitch>
      </RelativeRouter>
    </MemoryRouter>
  );

  getByText('home');
});

test('correctly initializes with an initial url with some standard url', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/foo']}>
      <RelativeRouter>
        <RelativeSwitch>
          <RelativeRoute path="/test">test</RelativeRoute>
          <RelativeRoute path="/">home</RelativeRoute>
        </RelativeSwitch>
      </RelativeRouter>
    </MemoryRouter>
  );

  getByText('home');
});
