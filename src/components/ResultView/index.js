import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const ResultView = props => {
  const {userId, result, currentId, choicesList, onClickPlayAgainBtn} = props

  const onClickPlayAgain = () => {
    onClickPlayAgainBtn()
  }

  const choiceItem = choicesList.find(eachItem => eachItem.id === currentId)

  const userItem = choicesList.find(eachItem => eachItem.id === userId)

  return (
    <div className="result-view-container">
      <div className="result-img-container">
        <div className="result-img-name-card">
          <p className="result-player-name">YOU</p>
          <img className="rps-img" src={userItem.imageUrl} alt="your choice" />
        </div>
        <div className="result-img-name-card">
          <p className="result-player-name">OPPONENT</p>
          <img
            className="rps-img"
            src={choiceItem.imageUrl}
            alt="opponent choice"
          />
        </div>
      </div>
      <p className="result">{result}</p>
      <div>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="play-again-button"
          aria-label="Play Again"
        >
          PLAY AGAIN
        </button>
      </div>
      <Popup
        modal
        trigger={
          <button
            aria-label="Show rules"
            type="button"
            className="popup-rules-trigger-button"
          >
            RULES
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <div className="popup-card">
              <button
                onClick={close}
                className="popup-close-button"
                type="button"
                aria-label="Close rules"
              >
                <RiCloseLine className="popup-close-icon" />
              </button>
              <img
                className="popup-rules-img"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default ResultView
