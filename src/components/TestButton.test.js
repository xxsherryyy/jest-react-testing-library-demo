// React Testing Library Demo
// https://testing-library.com/docs/

// import methods
import { render, screen, fireEvent } from "@testing-library/react";

// import your component
import TestButton from "./TestButton";

describe("Finish button should show number of questions answered correctly", () => {
  test("on click of button Finish", async () => {
    render(<TestButton />);
    const button = screen.getByRole("button")
    fireEvent.click(button);

    expect(screen.getByRole('button')).toBeInTheDocument()
    // expect(document.button("button", { name: /clicked/i })).toBe(getByPlaceHodertext);
  });
});
