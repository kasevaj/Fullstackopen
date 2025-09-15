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

export default Content;