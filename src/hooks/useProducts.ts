import { ProductsContext } from "@/contexts/productsContext";
import { useContext } from "react";

export function useProducts(){
    return useContext(ProductsContext)
}