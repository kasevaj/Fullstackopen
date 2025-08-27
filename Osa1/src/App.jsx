const Header = ({ course }) => {
  console.log(course.name)
  return (
    <div>
      <h1>
        {course.name}
      </h1>
    </div>
  )
}

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)


const Total = ({ course }) => (
  <p>Number of exercises {course.parts.reduce((sum, p) => sum + p.exercises, 0)}</p>
)


const Part = ({ part }) => <p>{part.name} {part.exercises}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App