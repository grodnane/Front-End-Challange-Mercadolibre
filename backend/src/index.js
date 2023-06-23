import 'dotenv/config'
import app from './app.js'



app.listen(process.env.PUBLIC_PORT);

console.log(`Servidor corriendo en ${process.env.PUBLIC_PORT}`);