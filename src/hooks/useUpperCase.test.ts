import { act, renderHook } from '@testing-library/react-hooks';

import { useUpperCase } from './useUpCase';

describe("when rendered", () => {
  it("return current initial value, uppercaseed", () => {
    const { result } = renderHook(
      () => useUpperCase("Test string")
    );
    
    expect(result.current.value).toEqual('TEST STRING');
  })
});

describe("when called the `update` method", () => {
  it("change the value and upperCase", () => {
    const { result } = renderHook(() => useUpperCase("Test string"));
    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED")
  })
})

describe("when re-render with another initial value", () => {
  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => useUpperCase(text), {
      initialProps: {text: 'Test String'}
    })

    rerender({ text: "Updated!"});
    expect(result.current.value)
  })
})