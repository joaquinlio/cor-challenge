const findWord = (rowsEntered) => {
    try {
        if(!rowsEntered){
            throw new Error('Filas no definidas')
        }
    
        rowsEntered = Object.values(rowsEntered)
                       
        rowsEntered = rowsEntered.map( row =>{
            return row.split('')
        })

        let oieCount = 0
        for (let indexRows = 0; indexRows < rowsEntered.length; indexRows++) {
            const row = rowsEntered[indexRows];
            for (let index = 0; index < row.length; index++) {
                const element = row[index];
            
                if( element === 'O' ){               
                    // chequear horisontalmente 
                    if( row?.[index + 1] === 'I' && row?.[index + 2] === 'E'){                
                        oieCount += 1                    
                    }
                    if( row?.[index - 1] === 'I' && row?.[index - 2] === 'E'){                
                        oieCount += 1                    
                    } 
                   
                    // chequear verticalmente abajo
                    if ( rowsEntered?.[indexRows + 1]?.[index] === 'I' && rowsEntered?.[indexRows + 2]?.[index] === 'E' ){
                        oieCount += 1  
                    }
                    // chequear verticalmente arriba
                    if ( rowsEntered?.[indexRows - 1]?.[index] === 'I' && rowsEntered?.[indexRows - 2]?.[index] === 'E' ){
                        oieCount += 1  
                    }
                    // chequea diagonal abajo derecha
                    if ( rowsEntered?.[indexRows + 1]?.[index + 1] === 'I' && rowsEntered?.[indexRows + 2]?.[index + 2] === 'E' ){
                        oieCount += 1  
                    }
                    // chequea diagonal abajo izquierda
                    if ( rowsEntered?.[indexRows + 1]?.[index - 1] === 'I' && rowsEntered?.[indexRows + 2]?.[index - 2] === 'E' ){
                        oieCount += 1  
                    }
    
                    // chequea diagonal arriba derecha
                    if ( rowsEntered?.[indexRows - 1]?.[index + 1] === 'I' && rowsEntered?.[indexRows - 2]?.[index + 2] === 'E' ){
                        oieCount += 1  
                    }
                    // chequea diagonal arriba izquierda
                    if ( rowsEntered?.[indexRows - 1]?.[index - 1] === 'I' && rowsEntered?.[indexRows - 2]?.[index - 2] === 'E' ){
                        oieCount += 1  
                    }
                }    
            }       
        }
    
        return oieCount  
    } catch (error) {
        console.log(error)
        return error.message
    }   
}

module.exports = {
    findWord
};