import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Shop from '@/components/Shop/Shop'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'
import { addToDb } from '@/utilities/fakedb'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

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

  console.log(cart);

  return (
    <>
      <Head>
        <title>E-Bazar - Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo/logo.png" />
      </Head>
      <Navbar />
      <Shop products={products} handleAddToCart={handleAddToCart} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://e-bazar-server.vercel.app/products');
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }

}
