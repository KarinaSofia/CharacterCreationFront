import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import StoryDisplay from './StoryDisplay';


function StoryList() {

    const [story, setStory] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const nameInput = e.target.elements.name.value;
        const genreInput = e.target.elements.genre.value;
        const descInput = e.target.elements.desc.value;


        addStory({
            name: nameInput,
            genre: genreInput,
            desc: descInput,
        })

    }

    const loadStoriesFromAPI = () => {
        axios.get("http://localhost:8081/api/stories")
            .then(function (response) {
                const allItems = response.data;
                setStory(allItems);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const addStory = (story) => {
        axios.post("http://localhost:8081/api/stories", story)
            .then(function (response) {
                loadStoriesFromAPI();
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    useEffect(() => { loadStoriesFromAPI(); }, [])

    const deleteStory = (id) => {
        axios.delete("http://localhost:8081/api/stories/" + id)
            .then(function (response) {
                loadStoriesFromAPI();
            })
            .catch(function (error) {
                console.log(error);
            })
    }





    return (
        <div class="container">
            <div class="row" >
                <div class="col-sm">
                    <h2 className='Header'>Story Creator</h2>
                    <hr></hr>
                </div>

            </div>
            <div class="row">
                <div class="col-sm">
                    <h1>My Stories</h1>
                    <ul>
                        {
                            story.map((story) => (
                                <li key={story.id}>
                                    <StoryDisplay story={story}
                                        deleteStory={deleteStory}
                                    >

                                    </StoryDisplay>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div class="col-sm">
                    <h1>Create a new Story!</h1>

                    <form onSubmit={handleSubmit}>
                        <div class="row" >
                            <div class="col-sm">
                                <span> Name </span>
                                <br></br>
                                <input type="text" required minLenght={1} name='name' placeholder="Enter the name..." />
                                <br></br>

                                <span> Genre </span>
                                <br></br>
                                <input type="text" name='genre' placeholder="Enter genre..." />
                                <br></br>

                                <span> Description </span>
                                <br></br>
                                <input type="text" name='desc' placeholder="Enter Description..." />
                                <br></br>
                                <br></br>
                                <button>Create</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}


export default StoryList;