import { PORT } from './config.js'
import app from './app.js'

app.listen(PORT)
console.log('server running on port 3000', PORT)

















// npm i express
// "type": "module",  sintaxis moderna
// npm i nodemon -D para reiniciar el coddigo// "dev": "nodemon index.js"
//coneccion a mysql
//modulo de coneccion mysql2, npm i mysql2
//en db.js //import { createPool } from "mysql2"; y hacemos la coneccion
//se importa en index.js
//donde se hace la consulta
// app.get('/ping', async (req, res) => {
//   const result = await pool.query('SELECT 1+1 AS result')
//   res.json(result)
// })

// npm install dotenv, permite leer .env

