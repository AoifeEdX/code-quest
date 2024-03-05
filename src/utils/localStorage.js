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