const getValidSpawnSpace = (possibleSpawnSpaces, invalidSpawnSpaces)=>{
    let validSpawnSpaces = []
    possibleSpawnSpaces.forEach(space=>{
        if( !invalidSpawnSpaces.includes(space) ){
            validSpawnSpaces.push(space)
        }
    })
    if(validSpawnSpaces.length === 0){
        return null
    }
    
    let selectedSpace = validSpawnSpaces[Math.floor(Math.random() * validSpawnSpaces.length)]
    return { rowIndex : Number(selectedSpace.split('-')[0]), columnIndex : Number(selectedSpace.split('-')[1]) }
}

export default getValidSpawnSpace