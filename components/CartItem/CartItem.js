import styles from './../../styles/CartItem.module.css';
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartItem = ({ item }) => {

    const {img, price, name, shipping, quantity} = item;

    return (
        <div className={styles.review_item}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className={styles.review_details_container}>
                <div className={styles.review_details}>
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className={styles.delete_container}>
                    <button className={styles.btn_delete}>
                        {/* <FontAwesomeIcon className="delete-icon" ></FontAwesomeIcon> */}
                        <RiDeleteBin5Fill className={styles.delete_icon} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CartItem;