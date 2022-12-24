import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"; 
import { useState } from 'react';


function CharList() {
 
    const [character, setCharacters] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const firstNameInput= e.target.elements.firstName.value;
        const lastNameInput= e.target.elements.lastName.value;
        const nickNameInput= e.target.elements.nickname.value;
        const ageInput= e.target.elements.age.value; 
        const genderInput= e.target.elements.gender.value;
        const primaryPersonalityTraitInput= e.target.elements.primaryPersonalityTrait.value;
        const primaryAccessoryInput= e.target.elements.primaryAccessory.value; 
        const heightInput= e.target.elements.height.value;
        const weightInput= e.target.elements.weight.value; 
        const eyeColorInput= e.target.elements.eyeColor.value;
        const hairColorInput= e.target.elements.hairColor.value; 
        const skinColorInput= e.target.elements.skinColor.value;
        const residenceInput= e.target.elements.residence.value;
        const ethnicityInput= e.target.elements.ethnicity.value;
        const occupationInput= e.target.elements.occupation.value; 
        
        addCharacter({ 
            firstName : firstNameInput, 
            lastName : lastNameInput,
            nickname : nickNameInput,
            age : ageInput,
            gender : genderInput,
            primaryPersonalityTrait : primaryPersonalityTraitInput,
            primaryAccessory : primaryAccessoryInput,
            height : heightInput,
            weight : weightInput,
            eyeColor : eyeColorInput,
            hairColor : hairColorInput,
            skinColor : skinColorInput,
            residence : residenceInput, 
            ethnicity : ethnicityInput,
            occupation : occupationInput
        })
    
      }

    const loadCharactersFromAPI = () => {
        axios.get("http://localhost:8081/api/characters")
        .then(function (response) {
            const allItems = response.data;
            setTodos(allItems);
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
        .catch(function (error){
            console.log(error); 
        })
      }

      useEffect(() => { loadCharactersFromAPI(); }, [])
 /*  
   
    */

    return (
        <div class="container">
            <div class="row" >
                <h1 className='Header'>Character Creator</h1>
                <hr></hr>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h1>character list</h1>
                </div>
                <div class="col-sm">
                    <h1>submit</h1>
                </div>
            </div>
        </div>

    )
}

export default CharList;