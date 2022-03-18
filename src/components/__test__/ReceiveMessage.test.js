import { getByTestId } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ReceiveMessage from "../ReceiveMessage";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders message", () => {
  act(() => {
    render(<ReceiveMessage message={{
      photoURL: "testURL",
      message: "test message"
    }}/>, container);
  });
  expect(container.textContent).toBe("test message");
});