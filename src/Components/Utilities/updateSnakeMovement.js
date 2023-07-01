const updateSnakeMovement = (setSnake, grid) => {
  setSnake((prev) => {
        if (prev.currentDirection || prev.upComingDirections.length > 0) {
            let rowIndex, columnIndex, result = { snakeName: prev.snakeName, data: [], occupiedCubes : [], currentDirection: "", upComingDirections: [], growth: 0 };
            if ( 
                prev.upComingDirections.length > 0 
                &&
                (
                    !
                    (
                        (prev.currentDirection === "ArrowDown"  && prev.upComingDirections[0] === "ArrowUp")    ||
                        (prev.currentDirection === "ArrowUp"    && prev.upComingDirections[0] === "ArrowDown")  ||
                        (prev.currentDirection === "ArrowRight" && prev.upComingDirections[0] === "ArrowLeft")  ||
                        (prev.currentDirection === "ArrowLeft"  && prev.upComingDirections[0] === "ArrowRight")
                    )
                    ||
                    ( prev.data.length == 1 )
                )
            ) {
                rowIndex    = prev.data[0].rowIndex    + ( prev.upComingDirections[0] === "ArrowDown"  ? 1 : prev.upComingDirections[0] === "ArrowUp"   ? -1 : 0 );
                columnIndex = prev.data[0].columnIndex + ( prev.upComingDirections[0] === "ArrowRight" ? 1 : prev.upComingDirections[0] === "ArrowLeft" ? -1 : 0 );
                result.currentDirection = prev.upComingDirections[0];
                result.upComingDirections = prev.upComingDirections.slice(1);
            } else {
                rowIndex    = prev.data[0].rowIndex    + ( prev.currentDirection === "ArrowDown"  ? 1 : prev.currentDirection === "ArrowUp"   ? -1 : 0 );
                columnIndex = prev.data[0].columnIndex + ( prev.currentDirection === "ArrowRight" ? 1 : prev.currentDirection === "ArrowLeft" ? -1 : 0 );
                result.currentDirection = prev.currentDirection;
                result.upComingDirections = [];
            }
            if( rowIndex >= 0 ){
                rowIndex %= grid.rows
            }
            else{
                rowIndex += grid.rows
            }
            if( columnIndex >= 0 ){
                columnIndex %= grid.columns
            }
            else{
                columnIndex += grid.columns
            }
            result.data = [ { rowIndex: rowIndex, columnIndex: columnIndex, type: 'snakeHead' } ]
            result.occupiedCubes.push(`${rowIndex}-${columnIndex}`)
            prev.data.forEach((part) => {
                part.type = 'snakeBody';
                result.data.push(part);
                result.occupiedCubes.push(`${part.rowIndex}-${part.columnIndex}`)
            });
            if(prev.growth === 0){
                result.data.pop();
                result.occupiedCubes.pop()
            }
            else{
                result.growth = prev.growth - 1;
            }
            result.data[result.data.length - 1].type = 'snakeTail';
            result.data[0].type = 'snakeHead';
            return result;
        } 
        else {
            return prev;
        }
        
  });
};

export default updateSnakeMovement;
