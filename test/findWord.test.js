const { findWord } = require('../src/findWord')

beforeEach(() => {
    rowsEntered = { '0': 'OIE', '1': 'IIX', '2': 'EXE' }
    rowsParsed = [ [ 'O', 'I', 'E' ], [ 'I', 'I', 'X' ], [ 'E', 'X', 'E' ] ] 
});


describe('findWord method', () => {    
    test('it should find 3 times the word "OIE"', () => {
        const result = findWord(rowsEntered)

        expect(result).toBe(3);
    });  
    
    test('it should find 4 times the word "OIE"', () => {
        rowsEntered = { '0': 'EIOIEIOEIO' }
        const result = findWord(rowsEntered)

        expect(result).toBe(4);
    });

    test('it should find 8 times the word "OIE"', () => {
        rowsEntered = {
            '0': 'EAEAE',
            '1': 'AIIIA',
            '2': 'EIOIE',
            '3': 'AIIIA',
            '4': 'EAEAE'
        }
        const result = findWord(rowsEntered)

        expect(result).toBe(8);
    });

    test('it should find 3 times the word "OIE"', () => {
        rowsEntered = {
            '0': 'OX',
            '1': 'IO',
            '2': 'EX',
            '3': 'II',
            '4': 'OX',
            '5': 'IE',
            '6': 'EX'
        }
        const result = findWord(rowsEntered)

        expect(result).toBe(3);
    });

    test('it should find 0 times the word "OIE"', () => {
        rowsEntered = { '0': 'E' }
        const result = findWord(rowsEntered)

        expect(result).toBe(0);
    });

    test('should return an error when rows are undefined', () => {

        rowsEntered = undefined
       
        const result = findWord(rowsEntered)
        
        expect(result).toBe('Filas no definidas');
    });     
});