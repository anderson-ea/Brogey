import React from "react";
import { render } from "@testing-library/react";
import { About } from "../About";



test('Submit button is unavailable', () => {

  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));

  // working on red green testing...not working yet
  const { getByTestId } = render(<About />)
  const buttonElement = getByTestId("submit")
  expect(buttonElement.toBeDisabled())
})