import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../types';
import Price from './Price';

function Card(props:Item) {

    const {id,title, price, thumbnail,picture, free_shipping }  = props
    

  return (
    
    

            <div className="container outline outline-slate-300 flex items-center flex-wrap max-w-[1200px] w-full">
        <Link {...props} to={`/items/:id${id}`}>
                <figure>
                  <img alt={id} src={picture} style={{width:150,height:150}}/>
                </figure>
                <Price  {...price}/>
                <div>{title}</div>
                
    
        </Link>
            </div>
   
  )
}

export default Card;