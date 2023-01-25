import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Shop from '@/components/Shop/Shop'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>E-Bazar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo/logo.png" />
      </Head>
      <Navbar />
      <Shop products={products} />
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();

  return {
      props: {
          products: data
      }
  }

}
