import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Item, Seo } from '../types';
import Categories from '../components/Categories';
import axios from 'axios';
import Price from '../components/Price';
import { descriptionFormatter, evalQuantitySold } from '../utils/helpers';
import SEO from '../components/SEO';


function Details({...props}){ 

  const {id:string} = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState<Item>()  
  const [categories, setCategories] = useState<string[]>([])
  
  const getItem = useCallback(()=>{
    try{

       axios.get(`http://localhost:3000/api/items/${string}`)
      .then((res)=>{

        const {item,categories} = res.data
        
        setItem(item)
        setCategories(categories)
        setLoading(false);
        

      })

    }catch(err){
      
      if(axios.isAxiosError(err)){
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          
        } else if (err.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser 
          // and an instance of http.ClientRequest in node.js
          console.log(err.request);
        }else{
          console.log(err)
        }

        
      }
      
    }
  }, [string])
    
useEffect(() => {
  setLoading(true);
  getItem();

}, [string])


 
const seo:Seo = useMemo(()=>{
  return {
    title:`${item?.title}`,
    description:`${item?.description.slice(0,320)}`,
    image:`${item?.thumbnail}`,
    url:""
  }
},[item])



 

  return (<>
              {      loading ? <Spinner/> : 

              <div className="outerContainer flex flex-col items-center justify-center w-full max-w-[1000px] ">
                <SEO {...seo}/>
                <Categories categories={categories} h1={props.h1}/>
              <div className=' w-full flex flex-row bg-white rounded-md max-w-[900px] gap-[2%]'>
                <section className="leftContainer max-w-[550px] w-full  flex flex-col items-center justify-start m-6">
                  <div className="imageContainer p-5 "><img src={item?.picture} alt={item?.title} style={{height:'100%', width:'100%'}} /></div>
                  <div className="descriptionContainer p-5 w-full">
                    <h3 className='text-xl font-semibold m-3'>Descripción del producto</h3>
                    <span className='ml-3 font-light'>{item && descriptionFormatter(item?.description)}</span>
                    </div>
                </section>
                <section className="rightContainer gap-3 flex flex-col justify-start m-6 p-6">
                  <span className="statusContainer font-light"><span>{item?.condition === 'new'? 'Nuevo' :'Usado'} - {item && evalQuantitySold(item?.sold_quantity)} </span></span>
                  <span className="titleContainer"><h2 className='font-semibold text-xl'>{item?.title}</h2></span>
                  <span className="priceContainer font-semibold text-3xl">{ item?.price && <Price {...item?.price}/> }</span>
                  <div className="buyButtonContainer"><button className='rounded-md text-white bg-blue-600 h-12 w-full font-bold' >Comprar</button></div>
                </section>
              </div> </div>   
              }
           </>
        )
        }

export default Details;