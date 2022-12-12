import React from "react";
import Image from "./image.png";
import Audio from "./audio.mp3";
import Video from "./video.mp4";

function App() {
  return (
    <div>
      <center>
        <img src={Image} height="250" width="auto" />
        <h3>React logo</h3>
        <audio controls>
          <source src={Audio} type="audio/ogg"/>
        </audio><br/>
        <video width="320" height="250" controls>
          <source src={Video} type="video/mp4"/>
        </video>

      </center>
    </div>
  );
}

export default App;
