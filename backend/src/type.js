/* /api/items?q=:query ==> type producto=   {
   author: {
      name: string
      lastname: string
    },
    categories: string[],
    items: [
      {
        id: string,
        title: string,
        price: {
          currency: string,
          amount: Number,
          decimals: Number
        },
        picture: string,
        condition: string,
        free_shipping: boolean
    }]} */