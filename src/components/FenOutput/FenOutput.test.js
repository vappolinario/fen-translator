import React from 'react';
import { render } from '@testing-library/react';
import  FenOutput  from './FenOutput.js'

const INVALID_POS_ONE_KING = "7k/8/8/8/8/8/8/8 w - - 0 1";
const INVALID_POS_ROW_ERROR = "7k/8/8/1/8/8/8/7K w - - 0 1";
const VALID_POS_TWO_KINGS = "7k/8/8/8/8/8/8/7K w - - 0 1";
const VALID_POS_INITIAL_BOARD = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

test('renders FenOutput correctly', () => {
  const { getByTestId } = render(<FenOutput value={VALID_POS_TWO_KINGS}/>);
  const output = getByTestId("fenoutput-test-id");
  expect(output).toBeInTheDocument();
});

test('renders FenOutput correctly initial board', () => {
  const { getByTestId } = render(<FenOutput value={VALID_POS_INITIAL_BOARD}/>);
  const output = getByTestId("fenoutput-test-id");
  expect(output).toBeInTheDocument();
});

test('renders error message without valid number of kings', () => {
  const { getByText } = render(<FenOutput value={INVALID_POS_ONE_KING}/>);
  const output = getByText(/Invalid number of kings/i);
  expect(output).toBeInTheDocument();
});

test('renders error message with invalid row', () => {
  const { getByText } = render(<FenOutput value={INVALID_POS_ROW_ERROR}/>);
  const output = getByText(/Invalid rows/i);
  expect(output).toBeInTheDocument();
});

