/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import TestQuiz from "./TestQuiz"


describe('TestQuiz', () => {
	test('TestQuiz render', () => {
		render(<TestQuiz />)
		expect(screen.getByText(/question/i)).toBeInTheDocument()
	})
	test('On answer button clicked', () => {
		render(<TestQuiz />)
		expect(screen.getByText(/question 1/i)).toBeInTheDocument()
		const chosenAnswerButton = screen.getAllByRole('button')[0]
		userEvent.click(chosenAnswerButton)
		expect(screen.getByTestId('test-header')).toHaveTextContent(/question 2/i)
	})
	test('On finish click', () => {
		render(<TestQuiz />)
		const finishButton = screen.getByRole('button', { name: /finish/i })
		userEvent.click(finishButton)
		expect(finishButton).toHaveTextContent(/4/i)
	})
})