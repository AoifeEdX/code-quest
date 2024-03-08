import { describe, it, expect } from 'vitest';

// Function to test the logic for displaying hearts according to the number of lives
function displayHearts(lives) {
  return Array.from({ length: lives }, (_, index) => <span key={index}>❤️</span>);
}

describe('testing lives display logic', () => {
  it('display hearts according to the number of lives', () => {
    const hearts = displayHearts(3);
    expect(hearts.length).toBe(3);
  });

  it('should not display any hearts if lives = 0', () => {
    const hearts = displayHearts(0);
    expect(hearts.length).toBe(0);
  });
});
