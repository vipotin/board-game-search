const BASE_URL = "https://api.boardgameatlas.com/api"
const CLIENT_ID=process.env.CLIENT_ID

export default async function getCategories() {
  const response = await fetch(`${BASE_URL}/game/categories?client_id=${CLIENT_ID}`)
  const data = await response.json()
  return data.categories
}
