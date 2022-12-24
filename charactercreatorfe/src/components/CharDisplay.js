
function CharDisplay({ character, deleteCharacter }) {

    return (
        <div className="CharacterBlock">
            
            <h1> {character.first_Name}</h1>
            <br></br>
            <span>Last Name: </span> {character.last_Name}
            <br></br>
            <span>Age: </span> {character.age}
            <br></br>  
            <span>Birthday: </span> {character.Birthday}
            <br></br>
            <span>Nickname: </span>{character.nickname}
            <br></br>
            <span>Gender: </span>{character.gender}
            <br></br>
            <span>Personality: </span>{character.primaryPersonalityTrait}
            <br></br>
            <span>Accessories: </span>{character.primaryAccessory}
            <br></br>
            <span>Height: </span>{character.height}
            <br></br>
            <span>Weight: </span>{character.weight}
            <br></br>
            <span>Eye color: </span>{character.eyeColor}
            <br></br>
            <span>Hair Color: </span>{character.hairColor}
            <br></br>
            <span>Skin Color: </span>{character.skinColor}
            <br></br>
            <span>Residence: </span>{character.residence}
            <br></br>
            <span>Ethnicity: </span>{character.ethnicity}
            <br></br>
            <span>Occupation: </span>{character.occupation}
            
            <button className="delete" onClick={() => { deleteCharacter(character.id) }}>delete Character</button>

        </div>
    )
}

/*
<li>
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
            </li>
*/

export default CharDisplay;