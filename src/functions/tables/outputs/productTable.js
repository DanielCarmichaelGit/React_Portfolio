import { getProducts } from '../../../API/fake-data/fakestoreapi';
import createProducts from '../mappings/productTable';

getProducts().then((res) => {
    console.log(res)
})

export default productData;