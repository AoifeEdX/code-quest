export const saveCurrentUser = (name, points) => {
  const currentUser = { name , points }
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export const savePointsToStorage = (newPoints) => {
  const storedUserData = localStorage.getItem('currentUser');
  const currentUser = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
  currentUser.points = newPoints;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

export const updateLeaderBordStorage = () => {
  const storedUserData = localStorage.getItem('currentUser');
  const storedLeaderboard = localStorage.getItem('leaderboard');
  const leaderboardData = storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
  const currentUser = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
  const updatedLeaderboardData = [...leaderboardData, currentUser];
  localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboardData));
};

