import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import ProductComponents from "./ProductComponents"
import axios from "axios"
import { setProducts } from "../redux/actions/productAction";

const ProductsLisning = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err)
            });
            dispatch(setProducts(res.data));
            // console.log(res.data)
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("products:", products)


    return (
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    )
}
export default ProductsLisning