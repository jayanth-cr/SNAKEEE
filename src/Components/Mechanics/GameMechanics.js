import React, { useState, useEffect } from "react";
import Snake from "./Entities/Snake/Snake";
import GameOver from "./GameState/GameOver";
import ScoreBoard from "./GameState/ScoreBoard";
import FoodInteraction from "./Entities/Food/FoodInteraction";

const GameMechanics = ({ grid, snake, setSnake, foods, setFoods, walls, invalidSpawnSpaces, possibleSpawnSpaces }) => {
  const [gameStates, setGameStates] = useState({
    pause: true,
    gameOver: false,
    gameStarted: false,
  });
  const [pressedKey, setPressedKey] = useState({ value: null });
  const handleClick = (event) => setPressedKey({ value: event.key });
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleClick);
    return () => window.removeEventListener("keydown", handleClick);
  }, []);

  useEffect(() => {
    if (pressedKey.value === " ") {
      setGameStates((prev) => ({ ...prev, pause: true }));
    }
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        pressedKey.value
      )
    ) {
      setGameStates((prev) => ({ ...prev, pause: false, gameStarted: true }));
    }
  }, [pressedKey]);

  return (
    <>
      <Snake
        grid={grid}
        snake={snake}
        setSnake={setSnake}
        gameStates={gameStates}
        pressedKey={pressedKey}
      ></Snake>
      <ScoreBoard
        score={score}
        setScore={setScore}
        gameStates={gameStates}
      ></ScoreBoard>
      <FoodInteraction
        gameStates={gameStates}
        setScore={setScore}
        snake={snake}
        setSnake={setSnake}
        grid={grid}
        foods={foods}
        setFoods={setFoods}
        possibleSpawnSpaces={possibleSpawnSpaces}
        invalidSpawnSpaces={invalidSpawnSpaces}
      ></FoodInteraction>
      <GameOver
        gameStates={gameStates}
        setGameStates={setGameStates}
        snake={snake}
        walls={walls}
      ></GameOver>
    </>
  );
};

export default GameMechanics;
