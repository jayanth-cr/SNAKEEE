import React, { useEffect } from "react";
import SpawnFood from "./SpawnFood";

const FoodInteraction = ({
  grid,
  snake,
  foods,
  setFoods,
  setScore,
  setSnake,
  gameStates,
  possibleSpawnSpaces,
  invalidSpawnSpaces,
}) => {

  useEffect(() => {
    if (snake.data.length > 0) {
      Object.keys(foods).forEach(foodCategory=>{
        foods[foodCategory].data.forEach(food=>{
          if (
            food.rowIndex === snake.data[0].rowIndex &&
            food.columnIndex === snake.data[0].columnIndex
          ) {
            setScore(prev => prev + foods[foodCategory].score);
            setSnake(prev => ({ ...prev, growth: prev.growth + foods[foodCategory].growth }));
            setFoods(prev=>({...prev, [foodCategory] : { ...prev[foodCategory] , data : [], occupiedCubes : [] }}))
            return;
          }
        })
      })
    }
  }, [snake, foods]);


  return (
          <>
            <SpawnFood
              possibleSpawnSpaces={possibleSpawnSpaces}
              invalidSpawnSpaces={invalidSpawnSpaces}
              type='normal'
              gameStates={gameStates}
              setScore={setScore}
              snake={snake}
              setSnake={setSnake}
              grid={grid}
              foods={foods}
              setFoods={setFoods}
            ></SpawnFood>
            <SpawnFood
              possibleSpawnSpaces={possibleSpawnSpaces}
              invalidSpawnSpaces={invalidSpawnSpaces}
              type='special'
              gameStates={gameStates}
              setScore={setScore}
              snake={snake}
              setSnake={setSnake}
              grid={grid}
              foods={foods}
              setFoods={setFoods}
            ></SpawnFood>
          </>
  );
};

export default FoodInteraction;
