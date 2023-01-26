import CartItem from "@/components/CartItem/CartItem";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Cart = ({ products }) => {

    const [storedCart, setStoredCart] = useState(null);

    useEffect(() => {
        const value = localStorage.getItem('shopping-cart');
        const cartItems = !!value ? JSON.parse(value) : undefined;
        setStoredCart(cartItems)
    }, []);

    console.log(storedCart);

    const initialCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(product => product._id === id);
        // console.log(addedProduct);
        if (addedProduct) {
            const quantity = storedCart[id];
            console.log(quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
        // console.log(addedProduct);
    }

    console.log(initialCart);



    return (
        <div>
            <Navbar />
            {
                initialCart.map(item => <CartItem
                    item={item}
                    key={item._id}
                ></CartItem>)
            }
            {
                initialCart.length === 0 && <h1
                    className="text-center text-3xl font-semibold mt-16"
                >No product added yet.</h1>
            }
        </div>
    );
};

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();

    return {
        props: {
            products: data
        }
    }

}

export default Cart;