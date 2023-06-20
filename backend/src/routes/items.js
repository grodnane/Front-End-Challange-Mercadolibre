import express from 'express';
import axios from 'axios';


const items = express.Router();

items.get("", async (req, res) => {
    const {q} = req.query
    const limit = '&limit=4'
    
    try{

        //get data from "https://api.mercadolibre.com/sites/MLA/search?q=:query" 
        const data = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${q}${limit}`);

        const {results,filters} = data.data
        
        
        //format the results
        //added extra parameters for details in product view
        
        const items = results.map((
            {
                id,
                title,
                currency_id,
                price,
                thumbnail_id,
                condition,
                shipping:{free_shipping},
                sold_quantity
            })=>{

            const staticIMG = `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`
            const staticThumbnail = `http://http2.mlstatic.com/D_${thumbnail_id}-I.jpg`
            
            //creating item object
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
        const categories = [];
        //Get categories from filters 
        if(filters.length){
            const {values} = filters[0];
            const {path_from_root} = values[0]
            path_from_root.map(path => {
                const {name} = path
                categories.push(name)
            })

        }else{
            //if there's no category we'll get the category from the first result, if there is a result            
            if(items[0]){
            const {id} = items[0];
            const itemCategory = await axios.get(`https://api.mercadolibre.com/items/${id}`);
            const {category_id} = itemCategory.data;
            const categoryList = await axios.get(
                `https://api.mercadolibre.com/categories/${category_id}`
              );
            const {name} = categoryList.data;
            categories.push(name)}
            
            
            
        }
       //creating header
        const response = {
            Author:{
                name:"Gustavo",
                lastname:"Rodñane"
            },
            categories,
            items
        }
        
        //sending header
        res.status(200);
        res.send(response);

    } catch (err) {

        //logging the error if there's any and sending througth the response
    console.error(err);
    res.status(500);
    res.send(err);
  }
})

export default items;