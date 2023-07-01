import React from "react";
import MovementUpdate from "./MovementUpdate";

const Snake = ({ snake, setSnake, gameStates, pressedKey, grid }) => {
  return (
    <>
      <MovementUpdate
        pressedKey={pressedKey}
        setSnake={setSnake}
        gameStates={gameStates}
        snake={snake}
        grid={grid}
      ></MovementUpdate>
    </>
  );
};

export default Snake;
