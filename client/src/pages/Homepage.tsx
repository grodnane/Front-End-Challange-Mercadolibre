import  { useMemo } from 'react'
import SEO from '../components/SEO';
import { Seo } from '../types';
import meli from '../../public/meli.svg'

function Homepage() {

    const seo:Seo = useMemo(() => {
      return {
        title: "Homepage | Meli Challenge",
        description: "Página principal del desafío técnico. Este desafio consiste en generar un buscador de productos basado en la interfaz de mercadolibre.com. ", 
        image:"https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png",
        type:"Frontend Challange for Mercado Libre"
      };
    }, []);

  return (
    <div className='h-screen bg-white max-w-[900px] w-full m-9 flex flex-col items-center justify-center gap-6 rounded-md'>
      <SEO {...seo}/>
      <img src={meli} alt="Mercadolibre" style={{width:'400px', height:'200px'}} />
      <h1 className='font-bold text-4xl hidden'>mercado libre</h1>
      <h2 className=' font-semibold'>Envíos gratis en el dia</h2>



    </div>
  )
}

export default Homepage