import express from 'express';
import cors from 'cors';
import router from './routes/items.js';
import item from './routes/itemsSearch.js'


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
app.use("/api/items", router)

app.use("/api/:id",item)


//404 error.


export default app;