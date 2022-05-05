import Image from 'next/image'
import styles from '../../styles/Games.module.css'
import useSWR from 'swr'
import { useState } from 'react'
import { useEffect } from 'react'

function GameList({ category }) {
  const [games, setGames] = useState([])
  const address = `/api/games?category=${category}`
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data } = useSWR(address, fetcher)

  useEffect(() => {
    if (data) {
      setGames(data.data.games)
    } else {
      setGames(null)
    }
  }, [data]);

  if(!games) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={styles.list}>
      {games.map(function(game, id){
        return (
          <div className={styles.game} key={id}>
            <h3 id="name">{game.name}</h3>
            
            <Image id="cover" alt="game cover" width="200" height="200" 
            src={game.image_url}/>
            
            <p id="rating"><b>Rating:</b> {game.average_user_rating.toFixed(2)}</p>
            <p id="players"><b>Players:</b> <span></span>
              {game.min_players == game.max_players ? game.min_players : `${game.min_players} - ${game.max_players}`}
            </p>
            <p id="playtime"><b>Playtime:</b> <span></span>
              {game.min_playtime == game.max_playtime 
              ? game.min_playtime : `${game.min_playtime} - ${game.max_playtime}`} min
            </p>
            <p id="learning-complexity"><b>Learning complexity:</b> {game.average_learning_complexity.toFixed(2)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GameList