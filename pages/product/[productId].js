import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
        fallback: false
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();

    return {
        props: {
            product: data
        }
    }

}

const ProductDetails = ({product}) => {
    return (
        <div>
            <Navbar />

                <h1>{product?.name}</h1>

            <Footer />
        </div>
    );
};

export default ProductDetails;