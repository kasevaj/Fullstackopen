import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const size = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedAnecdote, setMostVoted] = useState(0)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handleNextClick = () => {
    const randomindex = getRandomInt(size)
    setSelected(randomindex)
  }
  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    const mostVotes = Math.max(...copy)
    const indexMostVoted = copy.indexOf(mostVotes)
    setMostVoted(indexMostVoted)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleNextClick}>next anecdote</button>
      <button onClick={handleVoteClick}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      <p>has {votes[mostVotedAnecdote]} votes</p>
    </div>
  )
}

export default App