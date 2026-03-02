export function Player(name, marker) {
  let score = 0;

  const getScore = () => score;
  const setPoints = () => score++;
  return {
    name,
    marker,
    getScore,
    setPoints,
  };
}
