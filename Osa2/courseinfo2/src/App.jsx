const Header = (props) => <h1>{props.course}</h1>

const Content = ({ part }) => {
  console.log("Content works..")
  return (
    <li>
      <Part part={part} />
    </li>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  console.log(props, 'props in use')

  console.log("Course works...")
  return (
    <div>
      <Header course={props.course.name} />
      <ul>
        {props.course.parts.map(part =>
          <Content key={part.id} part={part} />
          // huom part on nyt se josta luodaan uusi array
        )}
      </ul>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  console.log("App works...");

  return <Course course={course} />
}

export default App