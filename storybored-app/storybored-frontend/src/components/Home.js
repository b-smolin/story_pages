import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ callback }) => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("player");
  const [roomValue, setRoomValue] = useState("room");
  const navToCanvas = () => {
    navigate("/Canvas");
  };

  const submit = (event) => {
    callback(nameValue, roomValue);
    navToCanvas();
  };

  return (
    <div className="Home">
      <div id="home-text">
        <h1>StoryBored</h1>
        <p1>
          Welcome to StoryPages, a collaborative drawing application that allows you to draw on multiple frames in real-time with friends anywhere on
          the planet. If the room name you enter already exists you will be taken to that room. Otherwise, the server will spin up a new room for you
          and take you there.
        </p1>
        <h2>Enter your name and click 'That's me!' to continue!</h2>
        <form>
          <div>
            <label htmlFor="username-input" id="username-label">
              Username:
            </label>
            <input type="text" id="username-input" onChange={(e) => setNameValue(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="room-input" id="room-label">
              Room:
            </label>
            <input type="text" id="room-input" onChange={(e) => setRoomValue(e.target.value)}></input>
          </div>
        </form>
        <div>
          <button id="create-room-button" onClick={submit}>
            That's me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
