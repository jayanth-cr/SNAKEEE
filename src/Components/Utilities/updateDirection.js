const updateSnakeDirection = (newDirection, setSnake) => {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(newDirection)) {
      setSnake((prev) =>{
        if( 0 > prev.upComingDirections.length < 3 ){
          if( prev.upComingDirections[ prev.upComingDirections.length - 1 ] === newDirection ){
            return prev
          }
          else{
            return { ...prev, upComingDirections: [...prev.upComingDirections, newDirection],}
          }
        }
        else{
          return { ...prev, upComingDirections: [...prev.upComingDirections, newDirection],}
        }
      })
    }
  };

export default updateSnakeDirection
