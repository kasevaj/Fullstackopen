import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <header>Statistics</header>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    const newTotal = newGood + bad + neutral
    const newAverage = (newGood - bad) / newTotal
    const newPositive = (newGood / newTotal * 100)
    setGood(newGood)
    setTotal(newTotal)
    setAverage(newAverage)
    setPositive(newPositive)
    console.log("total", total)
  }
  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newTotal = good + bad + newNeutral
    const newAverage = (good - bad) / newTotal
    const newPositive = (good / newTotal * 100)
    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage(newAverage)
    setPositive(newPositive)
    console.log("neutral", neutral)
    console.log("total", total)
  }
  const handleBadClick = () => {
    const newBad = bad + 1
    const newTotal = newBad + good + neutral
    const newAverage = (good - newBad) / newTotal
    const newPositive = (good / newTotal * 100)
    setBad(newBad)
    setTotal(newTotal)
    setAverage(newAverage)
    setPositive(newPositive)
    console.log("total", total)
  }

  return (

    <div>
      <header>
        Give Feedback
      </header>
      <button onClick={handleGoodClick}> good</button>
      <button onClick={handleNeutralClick}> neutral</button>
      <button onClick={handleBadClick}> bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />

    </div>
  )
}

export default App

// lisätään kokonaissumma, keskiarvo ja positiivisten arvosteluiden prosenttimäärä

// keskiarvo kun good = 1, neutral = 0 ja bad = -1
// average = (good - bad) / total ??