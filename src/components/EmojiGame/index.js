/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

// import {v4} from 'uuid'

import WinOrLoss from '../WinOrLoseCard'

import Emoji from '../EmojiCard'

import Navbar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isWin: false,
  }

  render() {
    const {score, topScore, isWin} = this.state
    const {emojisList} = this.props
    return (
      <div>
        <div>
          <Navbar score={score} topScore={topScore} />
        </div>
        <div>
          {emojisList.map(item => (
            <Emoji item={item} key={item.id} />
          ))}
          <WinOrLoss isWin={isWin} score={score} />
        </div>
      </div>
    )
  }
}

export default EmojiGame
