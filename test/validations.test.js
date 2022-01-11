const { validateRowsAndColums, validateRowValues } = require('../src/validations')


beforeEach(() => {
    rows = 3 
    columns = 3
    rowValue = 'OIE' 
});
describe('validateRowsAndColums method', () => {
    test('should return true when the input is correct', () => {

        const result = validateRowsAndColums(rows)

        expect(result).toBeTruthy();
    });

    test('should return error message when the input is not a number', () => {      

        rows = 'string'

        const result = validateRowsAndColums(rows)

        expect(result).toBe('Debe ingresar un numero');
    });

    test('should return an error message when the input is a number less than 1', () => {      
        
        rows = 0

        const result = validateRowsAndColums(rows)

        expect(result).toBe('Debe ingresar un numero entre 1 y 100');
    });

    test('should return an error message when the input is a number greater than 100', () => {      

        rows = 101

        const result = validateRowsAndColums(rows)

        expect(result).toBe('Debe ingresar un numero entre 1 y 100');
    });   
});

describe('validateRowValues method', () => {
    test('should return true when the input is correct', () => {

        const result = validateRowValues(rowValue, columns)

        expect(result).toBeTruthy();
    });

    test('should return an error message when the input is a number', () => {      

        rowValue = 123 

        const result = validateRowValues(rowValue, columns)

        expect(result).toBe('Debe ingresar letras');
    });

    test('should return an error message when the input is not capitalized', () => {      

        rowValue = 'oie'

        const result = validateRowValues(rowValue, columns)

        expect(result).toBe('Debe ingresar letras mayusculas');
    });

    test('debería devolver un mensaje de error cuando la entrada es menor que el número de columnas ingresadas', () => {      

        rowValue = 'O'
        
        const result = validateRowValues(rowValue, columns)

        expect(result).toBe('El valor ingresado es menor a las columnas seteadas');
    });

    test('it should return an error message when the input is greater than the number of columns entered', () => {      

        rowValue = 'OIEE'
        
        const result = validateRowValues(rowValue, columns)

        expect(result).toBe('El valor ingresado es mayor a las columnas seteadas');
    });   
});