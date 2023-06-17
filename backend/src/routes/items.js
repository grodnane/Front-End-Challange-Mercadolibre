import express from 'express';
import axios from 'axios';


const items = express.Router();

items.get("", async (req, res) => {
    const {q} = req.query
    const limit = '&limit=4'
    
    try{

        //get data from "https://api.mercadolibre.com/sites/MLA/search?q=:query" 
        const data = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${q}${limit}`);

        const {results,filters,available_filters} = data.data
        console.log(results)
        
        //format the results
        //added extra parameters for fun
        
        const items = results.map(({id,title,currency_id,price,thumbnail_id,condition,shipping:{free_shipping},sold_quantity})=>{

            const staticIMG = `http://http2.mlstatic.com/${thumbnail_id}-L.jpg`
            const staticThumbnail = `http://http2.mlstatic.com/${thumbnail_id}-I.jpg`
            

            return{
                id,
                title,
                price:{
                    currency:currency_id,
                    amount: Math.floor(price),
                    decimals: Math.floor(price *10%10/10*100)
                },
                picture:staticIMG,
                condition,
                free_shipping,
                sold_quantity,
                thumbnail:staticThumbnail
            }
        })


        //check for categories
        let categories;
        //TODO : Get categories from filters or avalible filters
       
        const response = {
            Author:{
                name:"Gustavo",
                lastname:"Rodñane"
            },
            items
        }
        
        res.status(200);
        res.send(response);

    } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
})

export default items;