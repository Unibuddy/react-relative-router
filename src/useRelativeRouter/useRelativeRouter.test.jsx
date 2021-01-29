import React, { useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RelativeRouter from '../RelativeRouter/RelativeRouter';
import useRelativeRouter from './useRelativeRouter';

const Test = () => {
  const { push } = useRelativeRouter();
  useEffect(() => {
    push('/hello');
  }, [push]);

  return null;
};

test('push should append url to the relative path', async () => {
  render(
    <BrowserRouter>
      <RelativeRouter path="/" url="/test">
        <Test />
      </RelativeRouter>
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(window.location.toString()).toEqual('http://localhost/test/hello');
  });
});
