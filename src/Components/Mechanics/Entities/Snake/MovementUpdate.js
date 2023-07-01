import React, { useEffect, useState } from "react";
import updateSnakeDirection from "../../../Utilities/updateDirection";
import updateSnakeMovement from "../../../Utilities/updateSnakeMovement";

const MovementUpdate = ({ pressedKey, setSnake, gameStates, snake, grid }) => {
  const [snakeMovement, setSnakeMovement] = useState(false);

  useEffect(() => {
    if (!gameStates.pause && !gameStates.gameOver && snake.data.length > 0) {
      updateSnakeMovement(setSnake, grid);
    }
  }, [snakeMovement]);

  useEffect(() => {
    if (!gameStates.gameOver && snake.data.length > 0) {
      updateSnakeDirection(pressedKey.value, setSnake);
    }
  }, [pressedKey]);

  useEffect(() => {
    const snakeMovement = setInterval(() => setSnakeMovement((prev) => !prev), 100);
    return () => clearInterval(snakeMovement);
  }, []);

  return <></>;
};

export default MovementUpdate;
