const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns Fizzbuzz if a number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })
  it('returns Fizz if a number is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz')
  })
  it('returns Buzz if a number is divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz')
  })
}); 