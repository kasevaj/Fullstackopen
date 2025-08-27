const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)

const Total = ({ parts }) => (
  <p>Number of exercises {parts.reduce((sum, p) => sum + p.exercises, 0)}</p>
)


const Part = ({ part }) => <p>{part.name} {part.exercises}</p>


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App