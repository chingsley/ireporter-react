/* eslint-env jest */
const multiply = ({ x, y }) => x * y;

describe('Multipliction test', () => {
  it('should return 27', () => {
    const answer = multiply({ x: 3, y: 9 });
    expect(answer).toBe(27);
  });
});
