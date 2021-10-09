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
