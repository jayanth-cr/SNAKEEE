import React, { useState, useEffect } from "react";
import getValidSpawnSpace from "../../../Utilities/getValidSpawnSpace";

const SpawnFood = ({ grid, foods, setFoods, gameStates, type, possibleSpawnSpaces, invalidSpawnSpaces, }) => {

  const [ attemptMade, setAttemptMade ] = useState(false)
  const [spawnFood, setSpawnFood] = useState({ value : false });
  const timing = {
    'normal' : 100,
    'special' : 10000
  }

  useEffect(()=>{
      if (foods[type].data.length === 0 && !gameStates.pause && !gameStates.gameOver && gameStates.gameStarted) {
          let randomFoodSpawn = getValidSpawnSpace(possibleSpawnSpaces, invalidSpawnSpaces);
          console.log(randomFoodSpawn)
          if (randomFoodSpawn) {
              setFoods(prev=>{
                  let resultData = [], resultOccupiedCubes = []
                  resultData.push({
                      rowIndex : randomFoodSpawn.rowIndex,
                      columnIndex : randomFoodSpawn.columnIndex,
                  })
                  resultOccupiedCubes.push(`${randomFoodSpawn.rowIndex}-${randomFoodSpawn.columnIndex}`)
                  prev[type].data = resultData
                  prev[type].occupiedCubes = resultOccupiedCubes
                  return { ...prev }
              })
          }
      }   
      setAttemptMade({ value : false })
  }, [spawnFood])
   

  useEffect(()=>{
      if(!attemptMade.value){
        setAttemptMade({ value : true })
        setTimeout(()=>setSpawnFood(prev => !prev), timing[type])
      }
    }, [foods, gameStates])
  return <></>;
};

export default SpawnFood;
