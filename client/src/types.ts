

export type Price = {
    currency: string
    amount: number
    decimals: number
}


export type Item = {
    id: string
    title: string
    price: Price
    picture: string
    condition: string
    free_shipping: boolean
    thumbnail: string
}

export type Category = {
    category: string
}