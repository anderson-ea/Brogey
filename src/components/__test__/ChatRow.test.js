import { render } from "@testing-library/react"
import ChatRow from "../ChatRow"

test("text prompts user to send message", () => {
  const { getByTestId } = render(<ChatRow />)
  const messageElement = getByTestId("message")
  // figure out how to fix errors and test
})