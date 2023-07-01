import React, { useEffect } from "react";

const GameOver = ({ snake, walls, gameStates, setGameStates }) => {
    
    useEffect(()=>{
        let snakeLocations = []
        snake.data.forEach(snakePart=>{
            if( snakeLocations.includes(`${snakePart.rowIndex}-${snakePart.columnIndex}`) ){
                setGameStates(prev=>({ ...prev, gameOver : true }))
                return
            }
            snakeLocations.push(`${snakePart.rowIndex}-${snakePart.columnIndex}`)
        })
        if( snake.data.length > 0 ){
            if( walls.occupiedCubes.includes(`${snake.data[0].rowIndex}-${snake.data[0].columnIndex}`)){
                setGameStates(prev=>({ ...prev, gameOver : true }))
                return
            }
        }
    }, [snake, walls])

    return (
        <>
        {
            gameStates.gameOver 
            && 
            (<div className="text-center"><div className="d-inline-block bg-danger text-white p-2 m-2">Game Over !!!</div></div>)
        }
        </>
    );
};

export default GameOver;
