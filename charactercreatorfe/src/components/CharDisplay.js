import 'bootstrap/dist/css/bootstrap.min.css';

function CharDisplay({ character, deleteCharacter }) {

    return (
        <div className="CharacterBlock">
            <div class="container">
                <div class="row" >
                    <div class="col-sm">
                        <h1> {character.first_Name}</h1>
                        <br></br>
                        <span>Last Name: </span> {character.last_Name}
                        <br></br>
                        <span>Age: </span> {character.age}
                        <br></br>
                        <span>Birthday: </span> {character.Birthday}
                        <br></br>
                        <span>Nickname: </span>{character.NickName}
                        <br></br>
                        <span>Gender: </span>{character.Gender}
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
                    </div>
                    <div class="col-sm">
                    <button className="delete" onClick={() => { deleteCharacter(character.id) }}>delete Character</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CharDisplay;