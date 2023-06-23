import  {  useCallback, useEffect, useMemo, useState } from 'react'
import {  useSearchParams,  } from 'react-router-dom';
import axios from 'axios';
import { Item } from '../types';
import Card from '../components/Card';
import NotFound from './NotFound';
import Spinner from '../components/Spinner';
import Categories from '../components/Categories';
import SEO from '../components/SEO';





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
            
            axios.get(`https://meli-challange.onrender.com/api/items?q=${query}`)
            .then((res)=>{
                if(res.data.items.length){
                setItems(res.data.items);
                setCategories(res.data.categories)
                setNotFound(false)
                setLoading(false);
                }else{
                //if nothing form api render not found page
                setLoading(false);
                setNotFound(true);
                            }
                })}
        //chaching errors. TODO: specify the errors
        catch(err){
            console.log(err)
        }
    },
      [query],
    )

    useEffect(() => {
        setLoading(true);
        getItems();
      }, [query]);


      const seo = useMemo(()=>{
        return {
            title:`${query && query?.charAt(0).toUpperCase() + query.slice(1,query.length).toLowerCase() || "Busca lo que necesites"} | Mercadolibre 📦 envíos gratis.`,
            description:`${query? "Resultados de la busqueda de "+ query +". Encontra esto y mucho mas en mercadolibre. Mercadolibre la mejor manera de comprar.": "Compra lo que necesites. Envios gratis en el dia. Mercadolibre la mejor manera de comprar."}`,
            image:`https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png`
            
        }
        
    }
    
    ,[])

    return ( <>{notFound? <NotFound/>:
                (loading ? <Spinner/> :
                <div className="outerContainer flex flex-col  items-center justify-center w-full ">
                            <SEO {...seo}/>
                                <Categories categories={categories} h1={query}/>
                            <div className="itemsContainer bg-white flex flex-col items-center w-full p-2 m-2 justify-center max-w-[1000px] divide-y divide-slate-300">
                                {items && items.map((item)=>                       
                                    <Card key={item.id} props={item} h1={query} /> )
                                }
                            </div>
                        </div>
                )                
            }</>
  )
}

export default Items