import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import router from './routes/items.js';
import item from './routes/itemsSearch.js'



//config
const app = express()
app.set('port', process.env.PUBLIC_PORT)
var accessLogStream = fs.createWriteStream(path.join('./src/logs', 'access.log'), { flags: 'a' })
//middlewares
app.use(cors())
app.use(morgan('combined', {stream:accessLogStream}))
app.use(express.json());

//routes 
//redirect to "/api/"" if "/"
app.get("/", (req, res) => {
  res.redirect("/api");
});
app.use("/api/items", router)

app.use("/api/items/",item)


//404 error.


export default app;