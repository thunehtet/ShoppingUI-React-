export interface Basket {
    id: string
    customerID: string
    items: BasketItem[]
  }
  
  export interface BasketItem {
    productId: string
    name: string
    price: number
    pictureUrl: string
    brand: string
    type: string
    quantity: number
  }
  