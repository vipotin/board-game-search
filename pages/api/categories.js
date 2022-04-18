import axios from "axios"
const BASE_URL = "https://api.boardgameatlas.com/api"
const CLIENT_ID=process.env.CLIENT_ID

export default async function getCategories() {
  const response = await axios.get(`${BASE_URL}/game/categories?client_id=${CLIENT_ID}`)
  return response.data.categories
}
