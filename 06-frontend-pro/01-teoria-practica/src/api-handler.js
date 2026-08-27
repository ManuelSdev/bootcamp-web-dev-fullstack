//TODO: #1 implementar api. Mirar en documentación
const endpoint = 'http://localhost:3000';

export const getGames = async () => {
  const response = await fetch(`${endpoint}/games`);
  return response.json();
}

export const getGameById = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}`);
  return response.json();
}

export const getCommentsOfGame = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);
  return response.json();
}
