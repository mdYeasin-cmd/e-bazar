import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { addToDb } from "@/utilities/fakedb";
import Head from "next/head";
import { useState } from "react";

export const getStaticPaths = async () => {

    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: {
                id: product._id
            }
        }
    })

    return {
        paths,
        fallback: true
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.id;

    console.log(context);

    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();

    return {
        props: {
            product: data
        }
    }

}

const ProductDetails = ({ product }) => {

    const { name, category, img, price, quantity, ratings, ratingsCount, seller, shipping, stock, _id } = product[0];

    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div>
            <Head>
                <title>E-Bazar - Product Details</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Logo/logo.png" />
            </Head>
            <Navbar />

            <div className="text-center mt-14">
                <h1 className="text-3xl font-semibold">{name}</h1>
                <h3 className="text-xl font-semibold text-[#F55E3D] my-4">{category}</h3>
                <div className="flex justify-center">
                    <img src={img} className="w-96 h-96" alt="" />
                </div>
                <p className="text-2xl py-3 w-96 mx-auto font-medium mb-2 mt-2 text-white bg-[#F55E3D]">Price: {price}</p>
                <p className="text-lg font-medium mb-2">Qunatity: {quantity}</p>
                <p className="text-lg font-medium mb-2">Ratings: {ratings} stars</p>
                <p className="text-lg font-medium mb-2">Ratings Count: {ratingsCount} People</p>
                <p className="text-lg font-medium mb-2">Seller: {seller}</p>
                <p className="text-lg font-medium mb-2">Shipping Charge: {shipping} USD </p>
                <p className="text-lg font-medium mb-2">Stock: {stock}</p>

                <div>
                    <button onClick={() => handleAddToCart(product)} className="text-2xl py-3 w-96 mx-auto mb-3 font-medium text-white bg-[#F55E3D] hover:bg-[#FDB334] border-0">Add To Cart</button>
                    {/* <h3 onClick={() => handleAddToCart(product)} className="text-xl font-semibold text-[#F55E3D] my-4">Ad To Cart</h3> */}
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;