import { getStoredCart } from "../utilities/fakedb";

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();

    return {
        props: {
            products: data
        }
    }

}

export const productsAndCartLoader = ({ products }) => {
    // get Products
    // const productsData = await fetch('http://localhost:5000/products');
    // const products = await productsData.json();
    console.log(products);
    // get Cart
    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
};

