import React from "react";
import Video2 from "../Components/Video2.mp4";

function Home(){
    return(
        <div className="app__home">
        <video className="app__video" autoPlay loop muted>
            <source src={Video2} type="video/mp4" />
        </video>
        </div>
    )  
}

export default Home;