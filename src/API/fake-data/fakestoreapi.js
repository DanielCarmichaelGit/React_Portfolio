import axios from "axios";

export async function getProducts() {
    try {
        const res = await axios.get('https://fakestoreapi.com/products');
        return res.data;
    } catch (error) {
        console.error("Error getting products", error.response.data);
        throw error;
    }
}