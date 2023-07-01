import React from "react";
import GridCube from "./GridCube";

const GameGrid = ({ grid, snake, foods, walls }) => {
  const generateGameGrid = (grid) => {
    let result = [];
    let temp = [];
    for (let row = 0; row < grid.rows; row++) {
      temp = [];
      for (let column = 0; column < grid.columns; column++) {
        temp.push(
          <GridCube
            key={`${row}-${column}`}
            className="board__column"
            snake={snake}
            foods={foods}
            walls={walls}
            rowIndex={row}
            columnIndex={column}
          ></GridCube>
        );
      }
      result.push(
        <div key={`${row}`} className="board__row">
          {temp}
        </div>
      );
    }
    return result;
  };
  return (
    <div className="board__wrapper">
      <div className="board">{generateGameGrid(grid)}</div>
    </div>
  );
};

export default GameGrid;
