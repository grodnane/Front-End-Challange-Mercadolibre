import express from 'express';
import cors from 'cors';
import router from './routes/items.js';



//config
const app = express()
app.set('port', process.env.PUBLIC_PORT)

//middlewares
app.use(cors())
app.use(express.json());

//routes 
//redirect to "/api/"" if "/"
app.get("/", (req, res) => {
  res.redirect("/api");
});
app.use("/api/", router)

app.get('/', function(req, res) {
  res.send('hello world');
});
//404 error.


export default app;