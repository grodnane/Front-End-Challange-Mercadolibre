import express from 'express';
import axios from 'axios';

const items = express.Router();


items.get("/:id", async (req,res)=>{

    const itemId = req.params.id;

    try{
        const itemURL = `https://api.mercadolibre.com/items/${itemId}`
        const descriptionURL = `https://api.mercadolibre.com/items/${itemId}/description`
        
        
        //calling the endpoints 
        const itemData = await axios.get(itemURL);
        const descriptionData = await axios.get(descriptionURL);


        //destructuring the data object
        const {id, title, price, currency_id,sold_quantity,shipping:{free_shipping},condition, thumbnail_id, category_id} = itemData.data
    

        const staticIMG = `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`
        const description = descriptionData.data?.plain_text
        
        
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


        //This part was'nt requested but i think its neccesary to display the categories of an especific object
        const categories=[]
        const categoryList = await axios.get(
                `https://api.mercadolibre.com/categories/${category_id}`
              );
        
        const {path_from_root} = categoryList.data;
        if(path_from_root.length){
            path_from_root.map(path => {
                const {name} = path
                categories.push(name)
            })
        }
        
        //building the response
        const response = {
                Author:{
                   name:"Gustavo",
                 lastname:"Rodñane"
                },
                item:item,
                categories:categories            
            }

        
        //setting the status and the response body
        res.status(200).send(response);
       
    }catch(err) {
        res.status(500).send(err);
        console.log(err);
    }
})

export default items;