"use client"

import { ProductType } from "@/@types/product-type";
import { apiProducts } from "@/lib/axios";
import { createContext, useEffect, useState } from "react";


interface ProductsContextType {
    products: ProductType[],
    fetchProducts() :Promise<void>
}
export const ProductsContext = createContext( {} as ProductsContextType);

export function ProductsContextProvider ({ children }: {children: React.ReactNode}){
    const [products, setProducts] = useState<ProductType[]>([]);

    async function fetchProducts(){
        try {
            const response = await apiProducts.get('/products')
            setProducts( response.data )
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    },[])
    
    return (
        <ProductsContext.Provider value={
            {
                products,
                fetchProducts
            }}>

            {children}
        </ProductsContext.Provider>
    )
}