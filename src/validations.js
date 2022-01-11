const validateRowsAndColums = (input) => {
    if (isNaN(input)) {                
        return 'Debe ingresar un numero';               
    } 
    if( Number(input) < 1 || Number(input) > 100 ){
        return 'Debe ingresar un numero entre 1 y 100'
    }                
    return true;
} 

const validateRowValues = (input, columns) => {
    if ( /[^a-zA-Z]/.test(input)){
        return 'Debe ingresar letras';
    }                               
    if ( input !== input.toUpperCase() ){
        return 'Debe ingresar letras mayusculas';
    }
    if (input.length < columns) {                
        return 'El valor ingresado es menor a las columnas seteadas';               
    } 

    if (input.length > columns) {                
        return 'El valor ingresado es mayor a las columnas seteadas';               
    }                  
    return true;
}

module.exports = {
    validateRowsAndColums,
    validateRowValues
};