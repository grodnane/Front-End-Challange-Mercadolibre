import Helmet from 'react-helmet'
import { Seo } from '../types';



const defaultSEO:Seo = {
    title:"Mercado Libre | Challange",
    description:"Front end challange para mercadolibre. Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    type:"Frontend Challange for Mercado Libre",
    url:``,
    image:"https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png",
    
}


function SEO(seo:Seo=defaultSEO) {
  return (
   <Helmet>
    <html lang='en'></html>
    <meta charSet="utf-8" />
    <title>{seo.title}</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name='description' content={seo?.description} />
    { /* Facebook tags */ }
    <meta property="og:type" content="website" />
    <meta property="og:title" content={seo?.title} />
    <meta property="og:url" content={seo?.url} />
    <meta property="og:description" content={seo?.description} />
    <meta property="og:image" content={seo?.image} />
    { /* End Facebook tags */ }
    { /* Twitter tags */ }
    <meta name="twitter:creator" content={"Gustavo Rodñane"} />
    <meta name="twitter:card" content={seo?.type} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo?.description} />
    { /* End Twitter tags */ }
   </Helmet>
  )
}

export default SEO;