import { divide } from './App';

describe('divide function', () => {
  describe('when give to integer', () => {
    it('should return a division result', () => {
        const [a, b, expected] = [10, 2, 5];

        const result = divide (a, b);
        expect(result).toEqual(expected);
    })
  });

  describe('when trying to divide by 0', () => {
    it('should throw an error', () => {
      const expectedError = new Error("You can't divide by zero");
      expect(() => divide(1, 0)).toThrow(expectedError);
    })
  })
})
