import axios, { AxiosError } from 'axios';
import  { lazy, useCallback, useEffect, useState } from 'react'
import {  useSearchParams,  } from 'react-router-dom';
import { Item } from '../types';
import Card from '../components/Card';
import NotFound from './NotFound';
import Spinner from '../components/Spinner';




function Items() {
    const [searchParams] = useSearchParams();
    const [items, setItems] = useState<Item[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [notFound,setNotFound] = useState<boolean>(false)
    const query = searchParams.get("search")
    

    
    const getItems = useCallback(
      () => {
        try{
        axios.get(`http://localhost:3000/api/items?q=${query}`)
        .then((res)=>{
            if(res.data.items.length){
            setItems(res.data.items);
            setCategories(res.data.categories)
            setNotFound(false)
            setLoading(false);
            }else{
                setLoading(false);
                setNotFound(true);
            }
        })}
        catch(err){

            const type =  err instanceof AxiosError
            console.log(type)
        }
      },
      [query],
    )

    useEffect(() => {
        setLoading(true);
        getItems();
      }, [query]);

      
     
    

      console.log(notFound)

    return ( <>{notFound? <NotFound/>:
                <div className="outerContainer flex flex-col  items-center justify-center ">
                    <div className="itemsContainer flex flex-col items-center justify-center max-w-[1200px] ">
                    {loading? <Spinner/>
                     : (items && items.map((item)=> <Card key={item.id} {...item} /> ))}
                        
                    </div>
                </div>
            }</>
  )
}

export default Items