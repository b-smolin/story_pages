<div align="center">

# StoryBored

</div>

## Project Background

This project is a fork of StoryBored, a project I worked on during my final semester at Temple earning my B.S. in Computer Science. I made a personal fork so I could continue to work on it to add new and improve existing functionality. StoryPages is a web based application that allows for multiple users to share a whiteboard that can be drawn on together in real time, as well as create multiple whiteboards to create a flipbook style animation. Users can create or join a room simply by typing its name. Once in the room, users can draw on the canvas using a variety of drawing tools, draw on multiple canvasses and switch between them as needed, observe what other users are drawing, and enter a presentation mode to show off their project.

## To Run:

- StoryPages requires the front end and back end to both be running to function. You will have to direct the front end to the correct back end address for the program to run properly. If running the back end on localhost, uncomment `const ENDPOINT = "http://localhost:7007";`. Otherwise change the IP address to that of the server you are running it on.

- In storybored-backend:
  `npm install`
  `npm start`

- In storybored-frontend
  `npm install`
  `npm start`

The front end uses port 3000 and the back end uses port 7007 by default.
