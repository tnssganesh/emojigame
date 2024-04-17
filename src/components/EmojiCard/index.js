import './index.css'

const Emoji = props => {
  const {item} = props
  const {emojiName, emojiUrl} = item

  const emojiClicked = () => {
    console.log('addclicked')
  }

  return (
    <li className="comment-item">
      <button type="button" onClick={emojiClicked}>
        <img alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default Emoji
