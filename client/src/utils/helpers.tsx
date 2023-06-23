
export function sign(currency: string) {
    return currency === 'ARS' ? '$' : 'u$s'

}


export function converThounsends(amount: number,currency: string): string {

    if(currency === 'ARS'){
    const value = amount.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    })
    return value}else{
        const value = amount.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
        return value
    }

    
}

export const evalQuantitySold = (quantity: number) => {
    if (quantity === 0) {
        return 'Aun sin ventas, se el primero.'
    } else if (quantity === 1) {
        return '1 vendido'
    } else {
        return quantity + ' Vendidos'
    }
}

export const descriptionFormatter = (description:(string|undefined))=>{
    
    const string = description?.split("\n")
    if(string?.length){ 
        return string?.map((parragraph,_i) => <p key={_i}>{parragraph}</p>)
    }
}