import React from "react";
import { render, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import { About } from "../About";
import useAuth from "../useAuth";
jest.mock("../useAuth")

beforeEach(cleanup); //clean DOM

jest.mock('../firebase', () => ({
  db: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        })),
      })),
    })),
  },
}));

jest.mock(".../hooks", () => ({
  useAuth: jest.fn(() => ({
    setUser: jest.fn(),
    user: {
        displayName: 'Eric', 
        uid: '1'
    },
  })),
}))

test('about test', () => {
  const resolvedValue = {
    user: {
      displayName: 'Eric',
      uid: '1'
    }
  }
  useAuth.mockResolvedValueOnce(resolvedValue)
  const { getByTestId } = render(<About />)
  const buttonElement = getByTestId('submit')
  expect(buttonElement).toBeDisabled()
})