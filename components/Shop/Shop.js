const Shop = ({ products }) => {

    console.log(products);

    return (
        <div>
            <h1>This is shop components</h1>
            {
                products.map(product => <h1>{product.name}</h1>)
            }
        </div>
    );
};

export default Shop;