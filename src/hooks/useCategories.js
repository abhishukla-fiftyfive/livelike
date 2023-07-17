import { useState } from "react";
import Api from "../api/Api";

export const useCategories = () => {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesErorr, setCategoriesErorr] = useState({});

    const handleFetchCategories = async () => {
        try {
            setIsLoadingCategories(true);
            const response = await Api.get('https://fakestoreapi.com/products/categories');
            setCategories(response);
        } catch (error) {
            setCategoriesErorr(error);
        } finally {
            setIsLoadingCategories(false);
        }
    }

    return {
        isLoadingCategories,
        categories,
        categoriesErorr,
        handleFetchCategories
    }
}