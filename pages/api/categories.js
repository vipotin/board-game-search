const BASE_URL = "https://api.boardgameatlas.com/api"
const CLIENT_ID=process.env.NEXT_PUBLIC_CLIENT_ID_TEST_CATEGORY

export default async function getCategories() {
  const response = await fetch(`${BASE_URL}/game/categories?client_id=${CLIENT_ID}`)
  const data = await response.json()
  return data.categories
}