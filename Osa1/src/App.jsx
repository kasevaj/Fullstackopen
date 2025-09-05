import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}


const Button = (props) => {
  return (
    < button onClick={props.onClick} >
      {props.text}
    </button >
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <header>Statistics</header>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="total" value={props.total} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
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
      <Button onClick={handleGoodClick} text='good'></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleBadClick} text="bad"></Button>

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
