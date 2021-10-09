import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

test('search spaceX', () => {
  render(<HomePage title="SpaceX" />);
  const headingElement = screen.getByText(/spaceX/i);
  expect(headingElement).toBeInTheDocument();
});

// unfortunately couldn't solve this error.
// eslint-disable-next-line max-len
// (typeError: Cannot destructure property 'datas' of '(0 , _reactRedux.useSelector)(...)' as it is undefined.).
