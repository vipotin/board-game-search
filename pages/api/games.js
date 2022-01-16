const BASE_URL = "https://api.boardgameatlas.com/api/search"
const CLIENT_ID=process.env.NEXT_PUBLIC_CLIENT_ID_TEST_CATEGORY

export default async function getGamesByCategory(category) {
  const response = await fetch(`${BASE_URL}?client_id=${CLIENT_ID}&categories=${category}`)
  const data = await response.json()
  return data.games
}
