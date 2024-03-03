

const LevelHero = (props) => {
    return (

        <Jumbotron>
            <h1>{props.name}</h1>
            <p>
                {props.description}
            </p>
            <p>{props.instruction}</p>
        </Jumbotron>
    )
}
export default LevelHero