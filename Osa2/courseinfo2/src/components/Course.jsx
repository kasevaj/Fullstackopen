import Header from './Header';       // polku tarpeen mukaan
import Content from './Content';
import Total from './Total';

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

export default Course;