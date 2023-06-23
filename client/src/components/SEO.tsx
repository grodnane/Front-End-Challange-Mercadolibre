import Helmet from 'react-helmet'
import { Seo } from '../types';



const defaultSEO:Seo = {
    title:"Mercado Libre | Challange",
    description:"Front end challange para mercadolibre. Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    type:"Frontend Challange for Mercado Libre",
    url:`challange-meli.vercel.app`,
    image:"https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png",
    
}


function SEO(seo:Seo=defaultSEO) {
  return (
   <Helmet>
    <html lang='es-AR'></html>
    <meta charSet="utf-8" />
    <title>{seo?.title||defaultSEO.title}</title>
    <meta name="robots" content={`noindex, nofollow`} />
    <meta property='description' name='description' content={seo?.description || defaultSEO.description} />
    { /* Facebook tags */ }
    <meta property="og:type" content="website" />
    <meta property="og:title" content={seo?.title  || defaultSEO.title} />
    <meta property="og:url" content={seo?.url || defaultSEO.url} />
    <meta property="og:description" content={seo?.description || defaultSEO.description} />
    <meta property="og:image" content={seo?.image || defaultSEO.image} />
    { /* End Facebook tags */ }
    { /* Twitter tags */ }
    <meta name="twitter:creator" content={"Gustavo Rodñane"} />
    <meta name="twitter:card" content={seo?.type || defaultSEO.type} />
    <meta name="twitter:title" content={seo.title || defaultSEO.title} />
    <meta name="twitter:description" content={seo?.description || defaultSEO.description} />
    { /* End Twitter tags */ }
   </Helmet>
  )
}

export default SEO;