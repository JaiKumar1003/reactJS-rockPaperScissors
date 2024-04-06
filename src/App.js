import {Component} from 'react'

import Header from './components/Header'
import PlayingView from './components/PlayingView'
import ResultView from './components/ResultView'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {isPlayAgain: true, currentId: '', userId: '', score: 0, result: ''}

  componentDidMount() {
    this.getRandomRPS()
  }

  getRandomRPS = () => {
    const randomNum = Math.floor(Math.random() * 3)
    this.setState({currentId: choicesList[randomNum].id})
  }

  onClickPlayAgainBtn = () => {
    this.setState({isPlayAgain: true}, this.getRandomRPS)
  }

  onClickAnswerBtn = id => {
    const {currentId} = this.state

    if (currentId === id) {
      this.setState({result: 'IT IS DRAW', isPlayAgain: false, userId: id})
    } else if (
      (currentId === 'ROCK' && id === 'PAPER') ||
      (currentId === 'PAPER' && id === 'SCISSORS') ||
      (currentId === 'SCISSORS' && id === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        isPlayAgain: false,
        userId: id,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        isPlayAgain: false,
        userId: id,
      }))
    }
  }

  render() {
    const {isPlayAgain, currentId, score, result, userId} = this.state

    console.log(currentId)
    return (
      <div className="app-container">
        <Header score={score} />
        {isPlayAgain ? (
          <PlayingView
            onClickAnswerBtn={this.onClickAnswerBtn}
            choicesList={choicesList}
          />
        ) : (
          <ResultView
            userId={userId}
            result={result}
            currentId={currentId}
            onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            choicesList={choicesList}
          />
        )}
      </div>
    )
  }
}
export default App
