import React from "react";

function MoodDisplay( { mood }){
    const moods={
        HAPPY:"Keep Smiling !😁",
        SAD:"It's okay to be sad sometimes 😓",
        EXITED:"Let's Celebrate 🤩",
        ANGRY:"Take a deep breath 😌",
    };

    return(
        <div>
            { mood ? <p>{moods[mood]}</p> : <p>Select your mood above</p>}
        </div>
    );

}
export default MoodDisplay;