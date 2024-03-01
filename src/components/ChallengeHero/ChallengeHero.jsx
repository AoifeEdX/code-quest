import questList from '../../../questList.json';

const ChallengeHero = (props) => {
    return (
        <>
            <div>
                <h2>Level {props.id}</h2>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.instruction}</p>
            </div>
        </>
    )

}
export default ChallengeHero;