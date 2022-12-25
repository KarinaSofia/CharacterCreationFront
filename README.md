# CharacterCreationFront
Front-End

## Project Description:

  The character creation tool is a organisational digital journal for those in the creative field to take advantage of. The character creation tool allows for easy character and story sketching to help anyone who thrives on well organised data. This tool will allow users plan out a vague idea of a character of their creation. The tool also allows for sketching of the same manner but for the stories itself. Whether you are planning a character or a story, the Character Creation Tool has all the important minor details to consider when making your character. 

  The front end of this application was made using React in Visual Studio Code. The back end was made using SpringBoot API in IntelliJ Ultimate addition. As such, this application equires the backend to be running to allow for the front end to interact with its endpoints and properly store the appropriate data. 
  
  While building the program, I came across many problems. Some of the bigger ones were the github libraires imports unfortunately not working, resulting in a less user interactive program and the inability to get the favourited function working. Unfortunate for the latter, implementation of a default false proved harder than expected, considering the code for such is very simple. The program will need to undergo extensive testing to get to the bottom of that issue. As a result, I didn’t not have the time to implement some features I would have loved to see in the program. These include a character custom background color, so that each character can feel a little more customisable, a light and dark theme for visual appeal, navigation bar to navigate the pages (separating the Stories creator form the Character creator). Finally, the biggest let down was not being able to implement an edit button for each character and story. Should a user make a mistake in creating a Character or Story, they will unfortunately need to completely restart the creation process. Ideally, under the delete button, users would see an edit button which would convert the normal span text to a textbox, allowing for users to edit out, add or change any detail about the character. 

## Design

  Classes in this program mainly deal with handling the axios requests. Each of the List components have get classes, put classes and delete classes. While it is not impossible for StoryList to have a post request, I choose to only have the CharList have a post request. The get request and Put requests were used mainly in the List components. The get was used to display all current characters and or stories whereas the Put request was used to create the character/stories. The Delete class was put in the display component as to clearly visualise which character/ story was being deleted. The delete class would accept the Character or story id it was currently assigned to and promptly do the function should it be pressed. The single Post request is being used to set the favorited Characters. In the future, the post endpoint will receive another class which will enable full character edits. 

*Goal Database Design*
![image](https://user-images.githubusercontent.com/104159293/209453763-b332b1b6-186c-4f5e-9c0a-41d93cf45bdf.png)

## Backend Endpoints
![image](https://user-images.githubusercontent.com/104159293/209453782-a9beb774-948b-40bb-b940-052339f3ce1a.png)

### Charcter Creation Tool
![image](https://user-images.githubusercontent.com/104159293/209453038-a3c6ea38-2671-41ba-890d-8d73ee39c00c.png)

### Story Creation Tool
![story creator](https://user-images.githubusercontent.com/104159293/209453048-2db5dc27-534b-4619-a3b5-41415b8dace0.png)
