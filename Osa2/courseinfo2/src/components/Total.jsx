const Total = (props) => {
    //2.3 samassa
    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log("total", total)
    return (
        <p>Number of exercises: {total}</p>
    )
}

export default Total;