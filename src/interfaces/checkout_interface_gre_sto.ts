export interface Invoice {
  
    orderNumber: string,
    amount: number,
    userId: string,
    name: string,
    idGues?: string,
    phone: string,
    address: string,
    typeUser: string,
    tax: number,
    typeShipping: string,
    shipping: number,
    details: InvoiceDetail[],
   
}

export interface InvoiceDetail {
    orderNumber: string,
    productId: string,
    quantity: number,
    price: number,
}