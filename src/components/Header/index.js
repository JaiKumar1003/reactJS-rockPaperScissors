import './index.css'

const Header = props => {
  const {score} = props
  return (
    <div className="header-container">
      <div className="header-heading-card">
        <h1 className="header-heading">
          Rock
          <br />
          Paper
          <br />
          Scissors
        </h1>
      </div>
      <div className="header-score-card">
        <p className="header-score-heading">Score</p>
        <p className="header-score">{score}</p>
      </div>
    </div>
  )
}

export default Header
