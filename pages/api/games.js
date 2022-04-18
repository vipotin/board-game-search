import axios from "axios"

const BASE_URL = "https://api.boardgameatlas.com/api"
const CLIENT_ID=process.env.CLIENT_ID
const fields = [
  "name", 
  "average_learning_complexity", 
  "average_user_rating", 
  "image_url"
].join()

export default async function getGames(req, res) {
  const url = `${BASE_URL}/search?client_id=${CLIENT_ID}&categories=${req.query.category}&fields=${fields}`
  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
