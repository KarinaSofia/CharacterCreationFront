import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import CharDisplay from './CharDisplay';


function CharList() {

    const [character, setCharacters] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const firstNameInput = e.target.elements.firstName.value;
        const lastNameInput = e.target.elements.last_Name.value;
        const NickNameInput = e.target.elements.NickName.value;
        const ageInput = e.target.elements.age.value;
        const birthdayInput = e.target.elements.Birthday.value;
        const genderInput = e.target.elements.Gender.value;
        const primaryPersonalityTraitInput = e.target.elements.primaryPersonalityTrait.value;
        const primaryAccessoryInput = e.target.elements.primaryAccessory.value;
        const heightInput = e.target.elements.height.value;
        const weightInput = e.target.elements.weight.value;
        const eyeColorInput = e.target.elements.eyeColor.value;
        const hairColorInput = e.target.elements.hairColor.value;
        const skinColorInput = e.target.elements.skinColor.value;
        const residenceInput = e.target.elements.residence.value;
        const ethnicityInput = e.target.elements.ethnicity.value;
        const occupationInput = e.target.elements.occupation.value;

        addCharacter({
            firstName: firstNameInput,
            last_Name: lastNameInput,
            NickName: NickNameInput,
            age: ageInput,
            Birthday: birthdayInput,
            Gender: genderInput,
            primaryPersonalityTrait: primaryPersonalityTraitInput,
            primaryAccessory: primaryAccessoryInput,
            height: heightInput,
            weight: weightInput,
            eyeColor: eyeColorInput,
            hairColor: hairColorInput,
            skinColor: skinColorInput,
            residence: residenceInput,
            ethnicity: ethnicityInput,
            occupation: occupationInput
        })

    }

    const loadCharactersFromAPI = () => {
        axios.get("http://localhost:8081/api/characters")
            .then(function (response) {
                const allItems = response.data;
                setCharacters(allItems);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const addCharacter = (character) => {
        axios.post("http://localhost:8081/api/characters", character)
            .then(function (response) {
                loadCharactersFromAPI();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const setFav = (id, Fav) => {

        axios.put("http://localhost:8081/api/characters/" + id, {
          Fav: Fav
        })
    
          .then(function (response) {
            loadCharactersFromAPI();
    
          })
          .catch(function (error) {
            console.log(error);
          })
    
    
      }


    useEffect(() => { loadCharactersFromAPI(); }, [])

    const deleteCharacter = (id) => {
        axios.delete("http://localhost:8081/api/characters/" + id)
            .then(function (response) {
                loadCharactersFromAPI();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    
    
      

    return (
        <div class="container">
            <div class="row" >
                <div class="col-sm">
                    <h2 className='Header'>Character Creator</h2>
                    <hr></hr>
                </div>

            </div>
            <div class="row">
                <div class="col-sm">
                    <h1>My characters</h1>
                    <ul>
                        {
                            character.map((character) => (
                                <li key={character.id}>
                                    <CharDisplay character={character}
                                        deleteCharacter={deleteCharacter}
                                        setFav={setFav}
                                    >

                                    </CharDisplay>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div class="col-sm">
                    <h1>Create a new Character!</h1>

                <form onSubmit={handleSubmit}>
                    <div class="row" >
                        <div class="col-sm">
                        <span> First name </span>
                        <br></br>
                        <input type="text" required minLenght={1} name='firstName' placeholder="Enter first name..." />
                        <br></br>

                         <span> Age </span>
                         <br></br>
                        <input type="text" name='age' placeholder="Enter age..." />
                        <br></br>

                        <span> NickName </span>
                        <br></br>
                        <input type="text" name='NickName' placeholder="Enter nickname..." />
                        <br></br>

                        <span> Personality </span>
                        <br></br>
                        <input type="text" name='primaryPersonalityTrait' placeholder="Enter personalities..." />
                        <br></br>

                        <span> Height </span>
                        <br></br>
                        <input type="text" name='height' placeholder="Enter height..." />
                        <br></br>

                        <span> Eye Color </span>
                        <br></br>
                        <input type="text" name='eyeColor' placeholder="Enter eyeColor..." />
                        <br></br>

                        <span> skinColor </span>
                        <br></br>
                        <input type="text" name='skinColor' placeholder="Enter skinColor..." />
                        <br></br>

                        <span> Ethnicity </span>
                        <br></br>
                        <input type="text" name='ethnicity' placeholder="Enter ethnicity..." />
                        <br></br>

                        </div>


                        <div class="col-sm">
                            <span> Last name </span>
                            <br></br>
                        <input type="text" name='last_Name' placeholder="Enter last name..." />
                        <br></br>

                        <span> Birthday </span>
                        <br></br>
                        <input type="text" name='Birthday' placeholder="Enter birthday..." />
                        <br></br>

                        <span> Gender </span>
                        <br></br>
                        <input type="text" name='Gender' placeholder="Enter gender..." />
                        <br></br>

                        <span> Accessories </span>
                        <br></br>
                        <input type="text" name='primaryAccessory' placeholder="Enter accessories..." />
                        <br></br>

                        <span> Weight </span>
                        <br></br>
                        <input type="text" name='weight' placeholder="Enter weight..." />
                        <br></br>

                        <span> Hair Color </span>
                        <br></br>
                        <input type="text" name='hairColor' placeholder="Enter hairColor..." />
                        <br></br>

                        <span> Residence </span>
                        <br></br>
                        <input type="text" name='residence' placeholder="Enter residence..." />
                        <br></br>

                        <span> Occupation </span>
                        <br></br>
                        <input type="text" name='occupation' placeholder="Enter occupation..." />
                        <br></br>
                        </div>
                    </div>
                    <br></br>
                    <button>Create</button>
                    </form>

                </div>
            </div>
        </div>

    )
}


export default CharList;