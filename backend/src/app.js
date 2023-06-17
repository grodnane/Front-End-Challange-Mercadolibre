import express from 'express';
import cors from 'cors';



//config
const app = express()
app.set('port', process.env.PUBLIC_PORT)

//middlewares
app.use(cors())
app.use(express.json());

//routes 

app.get('/', function(req, res) {
  res.send('hello world');
});
//404 error.


export default app;