import { useState } from 'react'

const Button = (props) => (

  <button onClick={props.onClick}>
    {props.text}
  </button>

)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log("jotain tapahtui good")
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log("jotain tapahtui neutral")
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log("jotain tapahtui bad")
  }

  return (

    <div>
      <header>
        Give Feedback
      </header>
      <Button onClick={handleGoodClick} text="good"></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleBadClick} text="bad"></Button>
      <p>
        Statistics
      </p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App

// kolme nappulaa, ja niiden omat summat