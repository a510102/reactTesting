import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Greetings } from './Greeting';

describe('when rendered weith a `name` prop', () => {
  it("should past it into the greetings text", () => {
    render(<Greetings name='Test Name' />);
    expect(screen.getByText(/Hello Test Name!/)).toBeInTheDocument();
  })
})

describe("when rendered with `onSendWave` prop", () => {
  it("should render the sending waves button", () => {
    render(<Greetings name='Test name' onSendWaves={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  })
})

describe("when the button is pressed", () => {
  it('should call the `onSendWave` callback', () => {
    const onSendWaveMock = jest.fn();
    render(<Greetings name='Test Name' onSendWaves={onSendWaveMock} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onSendWaveMock).toHaveBeenCalledWith("Waves sent to Test Name!")
  })
})