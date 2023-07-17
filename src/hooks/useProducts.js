import { useState } from "react";
import Api from "../api/Api";

export const useProducts = () => {
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);
    const [products, setProducts] = useState([]);
    const [productsErorr, setProductsErorr] = useState({});

    const handleFetchProducts = async (category) => {
        const categoryURL = category ? `/category/${category}` : '';
        try {
            setIsLoadingProducts(true);
            setProducts([]);
            const response = await Api.get(`https://fakestoreapi.com/products${categoryURL}`);
            setProducts(response);
        } catch (error) {
            setProductsErorr(error);
        } finally {
            setIsLoadingProducts(false);
        }
    }

    return {
        isLoadingProducts,
        products,
        productsErorr,
        handleFetchProducts
    }
}