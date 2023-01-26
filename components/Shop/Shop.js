import Product from "../Product/Product";

const Shop = ({ products, handleAddToCart }) => {

    return (
        <div className="p-14">
            <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;