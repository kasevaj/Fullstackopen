import { useState } from 'react'

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
      <p>
        Statistics
      </p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

export default App

// lisätään kokonaissumma, keskiarvo ja positiivisten arvosteluiden prosenttimäärä

// keskiarvo kun good = 1, neutral = 0 ja bad = -1
// average = (good - bad) / total ??