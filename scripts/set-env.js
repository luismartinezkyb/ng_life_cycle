const { count } = require('console');
const {writeFileSync, mkdirSync} = require('fs')

require('dotenv').config()

const targetPath = './src/environments/environments.ts'

const envFileContent = `
  export const environment = {
    MAPBOX_KEY: "${process.env['MAPBOX_KEY']}",
  }
`;
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Prod or Dev ? p/D:', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });


//CREAR DIRECTORIO DE LAS VARIABLES ENV
mkdirSync('./src/environments', {recursive:true})
//CREANDO EL ARCHIVO EN NUESTRO PATH
writeFileSync(targetPath, envFileContent);

