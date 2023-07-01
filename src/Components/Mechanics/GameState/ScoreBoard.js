import React, { useState, useEffect } from "react";

const ScoreBoard = ({ score, setScore, gameStates }) => {

    const [ updateScoreFlag, setUpdateScoreFlag ] = useState(false)
    

    useEffect(()=>{
        if( !gameStates.pause && !gameStates.gameOver && gameStates.gameStarted ){
            setScore(prev=>prev + 1)
        }
    }, [updateScoreFlag])

    useEffect(() => {
        const scoreUpdation = setInterval(()=>setUpdateScoreFlag(prev=>!prev), 1000);
        return () => clearInterval(scoreUpdation);
    }, []);

    return  <>
                <div className="text-center">
                    <div className="d-inline-block bg-success text-white p-2 m-2">
                        Score : {score}
                    </div>
                </div>
            </>;
};

export default ScoreBoard;
