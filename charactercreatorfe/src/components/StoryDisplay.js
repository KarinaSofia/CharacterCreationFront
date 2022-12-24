import 'bootstrap/dist/css/bootstrap.min.css';

function StoryDisplay({ story, deleteStory,}) {


    return (
        <div className="CharacterBlock">
            <div class="container">
                <div class="row" >
                    <div class="col-sm">
                        <h1> {story.name}</h1>
                        <br></br>
                        <span>Genre: </span> {story.genre}
                        <br></br>
                        <span>Description: </span> {story.desc}
                        <br></br>
                        
                    </div>
                    <div class="col-sm">
                        
                        <button className="delete" onClick={() => { deleteStory(story.id) }}>delete Story</button>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StoryDisplay;