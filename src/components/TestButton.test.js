// React Testing Library Demo
// https://testing-library.com/docs/

// import methods
import { render, screen, fireEvent } from "@testing-library/react";

// import your component
import TestButton from "./TestButton";

// describe the test
describe("Finish button should show number of questions answered correctly", () => {

  test("on click of button Finish", async () => {
    render(<TestButton />);

    //define the object
    const button = screen.getByRole("button")

    //mock the action 
    fireEvent.click(button);

    // return the expected result
    expect(button).toHaveTextContent(/4/i)
    // expect(document.button("button", { name: /clicked/i })).toBe(getByPlaceHodertext);
  });
});
// test('button render questions completed', () => {
//     const button = screen.getByRole("button")

//     expect(button).toBe("4/4");
//   });