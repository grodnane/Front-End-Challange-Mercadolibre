import app from './app.js'
import 'dotenv/config'



app.listen(3000);

console.log(`Servidor corriendo en ${process.env.PUBLIC_PORT}`);