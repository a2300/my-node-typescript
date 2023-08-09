import add from './add-numbers'

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
  
  test('string with number should result in 10', () => {
    expect(add('1, 2, 3, 4')).toBe(10);
  });

  test('string with negative number should throw error', () => {
    expect(() => { add('1, -10') }).toThrow();
  });
});