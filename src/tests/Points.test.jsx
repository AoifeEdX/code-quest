import { describe, it, expect } from 'vitest';

// Function to test the logic for buying another life
function buyLife(lives, points, costOfLife) {
  if (points >= costOfLife) {
    return {
      newLives: lives + 1,
      newPoints: points - costOfLife,
    };
  } else {
    return {
      newLives: lives,
      newPoints: points,
    };
  }
}

describe('testing points logic', () => {
  it('should allow the player to buy another life if they have enough points', () => {
    const costOfLife = 10;
    const initialLives = 3;
    const initialPoints = 20;

    const { newLives, newPoints } = buyLife(initialLives, initialPoints, costOfLife);

    expect(newLives).toBe(initialLives + 1); // Player should have gained a life
    expect(newPoints).toBe(initialPoints - costOfLife); // Points should have decreased by 10 points
  });

  it('should not allow the player to buy another life if they do not have enough points', () => {
    const costOfLife = 10;
    const initialLives = 3;
    const initialPoints = 5;

    const { newLives, newPoints } = buyLife(initialLives, initialPoints, costOfLife);

    expect(newLives).toBe(initialLives); // Player should not have gained a life
    expect(newPoints).toBe(initialPoints); // Points should remain the same
  });
});
