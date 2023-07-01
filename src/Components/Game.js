import React, { useEffect, useState } from "react";
import GameGrid from "./GameBoard/GameGrid";
import "../Styles/game.css";
import GameMechanics from "./Mechanics/GameMechanics";

const Game = () => {
  const rows = 25;
  const columns = 62;
  const initialPosition = { rowIndex: 5, columnIndex: 5 };

  const [grid, setGrid] = useState({ rows: 0, columns: 0 });
  const [snake, setSnake] = useState({
    snakeName: "mainSnake",
    growth: 0,
    currentDirection: "",
    upComingDirections: [],
    data: [],
    occupiedCubes : []
  });
  const [foods, setFoods] = useState({
    normal : { data : [], occupiedCubes : [], score : 10, type : 'normalFood', growth : 1 },
    special : { data : [], occupiedCubes : [], score : 50, type : 'specialFood', growth : 2 }
  });

  const [walls, setWalls] = useState({
    data : [],
    occupiedCubes : [],
    type : 'gridWall'
  });
  
  const [ possibleSpawnSpaces, setPossibleSpawnSpaces ] = useState([])
  const [ invalidSpawnSpaces, setInvalidSpawnSpaces ] = useState([])

  useEffect(()=>{
    let newInvalidSpawnSpaces = [ ...snake.occupiedCubes, ...walls.occupiedCubes ]
    Object.keys(foods).forEach(foodCategory=>{
      newInvalidSpawnSpaces = [ ...newInvalidSpawnSpaces, ...foods[foodCategory].occupiedCubes ]
    })
    setInvalidSpawnSpaces(newInvalidSpawnSpaces)
  }, [snake, foods, walls])
  useEffect(() => {
    setGrid({ rows: rows, columns: columns });
    setSnake((prev) => ({
      ...prev,
      data: [
        {
          rowIndex: initialPosition.rowIndex,
          columnIndex: initialPosition.columnIndex,
          type: "snakeHead",
        },
      ],
      occupiedCubes : [ `${initialPosition.rowIndex}-${initialPosition.columnIndex}` ] 
    }));
    let newData = []
    let newOccupiedCubes = []
    let newPossibleSpawnSpaces = []
    for(let row = 0 ; row < rows ; row++){
      for(let column = 0 ; column < columns ; column ++){
        newPossibleSpawnSpaces.push(`${row}-${column}`)
        if( row === 0 || row === ( rows - 1 ) || column === 0 || column === ( columns - 1 ) ){
          if( row !== 12 && row !== 11 && row !== 13 && column !== 28 && column !== 29 && column !== 30 ){
            newData.push({ rowIndex : row, columnIndex : column })
            newOccupiedCubes.push(`${row}-${column}`)
          }
        }
      }
    }
    setPossibleSpawnSpaces(newPossibleSpawnSpaces)
    setWalls(prev=>({ ...prev, data : newData, occupiedCubes : newOccupiedCubes }))
  }, []);

  return (
    <div>
      <GameGrid grid={grid} snake={snake} foods={foods} walls={walls}></GameGrid>
      <GameMechanics
        possibleSpawnSpaces={possibleSpawnSpaces}
        invalidSpawnSpaces={invalidSpawnSpaces}
        snake={snake}
        setSnake={setSnake}
        foods={foods}
        walls={walls}
        setFoods={setFoods}
        grid={grid}
      ></GameMechanics>
    </div>
  );
};

export default Game;
