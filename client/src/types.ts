

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
    description: string
    sold_quantity: number

}

export type Category = {
    category: string
}

export type Seo = {
    title: string
    description: string
    type?: string
    url?: string
    image?: string

}