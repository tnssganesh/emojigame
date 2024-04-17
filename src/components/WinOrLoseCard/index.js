// Write your code here.

import './index.css'

const WinOrLoss = props => {
  const {isWin, score} = props

  let card = {}
  if (isWin) {
    card = {
      message: 'You Won',
      scoreText: 'Best Score',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
    }
  } else {
    card = {
      message: 'You Lose',
      scoreText: 'Score',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
    }
  }

  const {message, scoreText, imgUrl} = card

  const onPlayAgain = () => {
    console.log('addclicked')
  }

  return (
    <div className="comment-item">
      <div>
        <h1>{message}</h1>
        <p>{scoreText}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img alt="emoji" src={imgUrl} />
      </div>
    </div>
  )
}

export default WinOrLoss
