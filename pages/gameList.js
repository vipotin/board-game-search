import Image from 'next/image'
import styles from '../styles/Home.module.css'

function GameList({ games }) {
  if(!games) {
    return <div></div>
  }
  return (
    <div className={styles.list}>
      {games.map(function(game, id){
        return (
          <div className={styles.game} key={id}>
            <h3 id="name">{game.name}</h3>
            {/* <p>{game.description_preview}</p> */}
            <Image id="cover" alt="game cover" width="200" height="200"src={game.image_url}></Image>
            <p id="rating">Rating: {game.average_user_rating.toFixed(2)}</p>
            <p id="learning-complexity">Learning complexity: {game.average_learning_complexity.toFixed(2)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GameList