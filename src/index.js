#!/usr/bin/env node
const { program  } = require('commander')
const { prompt, ui } = require('inquirer')
const { findWord } = require('./findWord')
const { validateRowsAndColums, validateRowValues } = require('./validations')

program.version('0.0.1').description('Cor challenge')

const runCommands = async () => {
    const { rows, columns } = await prompt([
        {
            type: 'input',
            message: 'Ingresar cantidad de filas',
            name: 'rows',
            value: 'number',
            validate: validateRowsAndColums
        },
        {
            type: 'input',
            message: 'Ingresar cantidad de columnas',
            name: 'columns',
            validate: validateRowsAndColums
        }
    ])

    const rowsQuestions = [...Array(Number(rows)).keys()].map((row) => {
        return {
            type: 'input',
            message: `Ingresar fila numero ${row + 1}`,
            name: `${row}`,
            validate: (input) => validateRowValues(input, columns)                   
        }
    })

    let rowsEntered = await prompt(rowsQuestions)
        
    const matchesFound = findWord(rowsEntered);

    const inquirerLog = new ui.BottomBar();

    inquirerLog.log.write(`Cantidad de "OIE" encontradas: ${matchesFound}`);

    const { confirm } = await prompt([
        {
            type: 'confirm',
            message: 'Ingresar otra sopa de letras?',
            name: 'confirm'            
        }
    ])

    if( confirm ){
        runCommands()
    }
}
// Comando para iniciar la aplicación
program.command('init').action( async ()=> {

    runCommands()
       
})

program.parse(process.argv);