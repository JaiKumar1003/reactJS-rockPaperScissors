import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const PlayingView = props => {
  const {choicesList, onClickAnswerBtn} = props

  return (
    <div className="playing-view-container">
      <ul className="playing-view-list">
        {choicesList.map(eachItem => {
          const onClickBtn = () => {
            onClickAnswerBtn(eachItem.id)
          }

          const testId = `${eachItem.id.toLowerCase()}Button`

          return (
            <li className="playing-view-item" key={eachItem.id}>
              <button
                data-testid={testId}
                onClick={onClickBtn}
                className="rps-img-button"
                type="button"
              >
                <img
                  className="rps-img"
                  src={eachItem.imageUrl}
                  alt={eachItem.id}
                />
              </button>
            </li>
          )
        })}
      </ul>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="popup-rules-trigger-button"
            aria-label="Show rules"
          >
            RULES
          </button>
        }
        aria-label="Game Rules Popup"
      >
        {close => (
          <div className="popup-container">
            <div className="popup-card">
              <button
                onClick={close}
                className="popup-close-button"
                type="button"
                aria-label="Close popup"
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

export default PlayingView
