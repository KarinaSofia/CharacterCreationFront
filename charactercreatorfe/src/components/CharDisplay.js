
function CharDisplay({ Character }) {

    return (
        <div>
            {Character.firstName}
            <br></br>
            {Character.lastName}
            <br></br>
            {Character.age}
            <br></br>
            {Character.nickname}
            <br></br>
            {Character.gender}
            <br></br>
            {Character.primaryPersonalityTrait}
            <br></br>
            {Character.primaryAccessory}
            <br></br>
            {Character.height}
            <br></br>
            {Character.weight}
            <br></br>
            {Character.eyeColor}
            <br></br>
            {Character.hairColor}
            <br></br>
            {Character.skinColor}
            <br></br>
            {Character.residence}
            <br></br>
            {Character.ethnicity}
            <br></br>
            {Character.occupation}
        </div>
    )
}


export default CharDisplay;