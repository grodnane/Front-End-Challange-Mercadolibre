
export function sign(currency: string) {
    return currency === 'ARS' ? '$' : 'u$s'

}


export function converThounsends(amount: number): string {
    const tousend = '' + Math.floor(amount / 1000)
    const hundreds = '' + amount % 1000

    return tousend.concat('.', hundreds)
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

export const descriptionFormatter = (description:string)=>{
    const string = description.split("\n")
    if(string.length){ 
        return string.map((parragraph,_i) => <p key={_i}>{parragraph}</p>)
    }
}