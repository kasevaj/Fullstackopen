const Header = (props) => <h2>{props.course}</h2>


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

const Total = (props) => {
  //2.3 samassa
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log("total", total)
  return (
    <p>Number of exercises: {total}</p>
  )
}


const Course = (props) => {
  console.log(props, 'props in use')

  console.log("Course works...")
  const course = props.course
  // jotta saadaan edelleen yhden coursen käsittely
  return (
    <div>
      <Header course={course.name} />
      <ul>
        {props.course.parts.map(part =>
          <Content key={part.id} part={part} />
          // huom part on nyt se josta luodaan uusi array
        )}
      </ul>
      <Total parts={course.parts} />

    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  console.log("App works...");

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App