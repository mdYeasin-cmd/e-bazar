import Link from "next/link";

const Product = ({ product, handleAddToCart }) => {

    const { img, name, price, seller, ratings } = product;

    return (
        <>
            <div className="card card-compact bg-base-100 shadow-lg">
                <figure>
                    {
                        img ? <img src={img} alt="" /> : "No Image Found Here"
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Seller: ${seller}</p>
                    <p>Ratings: {ratings} stars</p>
                    <div className="card-actions justify-between mb-3 mt-2">
                        <Link href={`product/${product?._id}`}>
                            <button className="btn bg-[#F55E3D] hover:bg-[#FDB334] border-0">See Details</button>
                        </Link>
                        <button onClick={() => handleAddToCart(product)} className="btn bg-[#F55E3D] hover:bg-[#FDB334] border-0">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;