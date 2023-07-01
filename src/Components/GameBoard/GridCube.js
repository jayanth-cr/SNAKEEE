import React from "react";
import cubeTypeToClassNameMappings from "../Utilities/cubeTypeToClassNameMappings";

const GridCube = ({ rowIndex, columnIndex, snake, foods, walls }) => {
  const getCubeType = () => {
    let cubeType = "";

    Object.keys(foods).forEach(foodCategory=>{
      foods[foodCategory].data.forEach(foodPart=>{
        cubeType = foodPart.rowIndex === rowIndex && foodPart.columnIndex === columnIndex ? foods[foodCategory].type : cubeType  
      })
    })
    walls.data.forEach(wallSegment=>{
      cubeType = wallSegment.rowIndex === rowIndex && wallSegment.columnIndex === columnIndex ? walls.type : cubeType
    })
    snake.data.forEach((snakePart) => {
      cubeType = snakePart.rowIndex === rowIndex && snakePart.columnIndex === columnIndex ? snakePart.type : cubeType
    });
    
    return cubeType;
  };

  return (
    <div className="board__cube">
      <div className={cubeTypeToClassNameMappings[getCubeType()]}></div>
    </div>
  );
};

export default GridCube;
