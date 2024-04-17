import './index.css'

const Navbar = props => {
  const {score, topScore} = props

  return (
    <div className="comment-item">
      <img
        alt="emoji logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
      />
      <p>Emoji Game</p>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )
}

export default Navbar
