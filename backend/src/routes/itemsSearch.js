import express from 'express';
import axios from 'axios';

const items = express.Router();


items.get("/:id", async (req,res)=>{

    const itemId = req.params.id;

    try{
        
        const itemURL = `https://api.mercadolibre.com/items/${itemId}`
        const descriptionURL = `https://api.mercadolibre.com/items/${itemId}/description`


        const itemData = await axios.get(itemURL);
        const descriptionData = await axios.get(descriptionURL);



        const {id, title, price, currency_id,sold_quantity,shipping:{free_shipping},condition, thumbnail_id} = itemData.data
    

        const staticIMG = `http://http2.mlstatic.com/${thumbnail_id}-L.jpg`
        const description = descriptionData.data.plain_text
    
        const item ={
            id,
            title,
            price:{
                currency:currency_id,
                amount:Math.floor(price),
                decimals: Math.floor( price *10%10/10 * 100)
            },
            picture:staticIMG,
            condition,
            free_shipping,
            sold_quantity,
            description
            }
    
    
        const response = {
                Author:{
                   name:"Gustavo",
                 lastname:"Rodñane"
                },
                item:item            
            }

        
        
        res.status(200);
        res.send(response);
        
    }catch(err) {
        console.log(err);
        res.send(500);
        res.send(err);
    }
})

export default items;