import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart} from '../redux/cart.slice';
import Link from 'next/link'

const CartPage = () => {

    // Extracting cart state from redux store 
    const cart = useSelector((state) => state.cart);

    // Reference to the dispatch function from redux store
    const dispatch = useDispatch();

    // const getTotalPrice = () => {
    //   return cart.reduce(
    //     (accumulator, dinosaur) => accumulator + dinosaur.quantity * dinosaur.price,
    //     0
    //   );
    // };
    console.log(cart.length)
    return  (
      <div className={styles.container}>
      <Head>
          <title>eDino | Cart</title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    {cart.length === 0 ? (
      <div className="rounded overflow-hidden shadow-lg mb-3 mt-4 text-center">
        <h1>Your Cart is Empty!</h1>
        <div>
          <Link href="/products" >
            <button className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full">
              Go to Products
            </button>
          </Link>
        </div>
        <div className={styles.container}>
          <img className="object-fill" src="./images/homepage.jpg" alt="t-rex" />
        </div>
      </div>
      
    ) : (
      <div className='flex flex-wrap mb-10 mt-10 justify-center space-x-10'>
        {cart.map((dinosaur) => (
          <div key={dinosaur.id} className="max-w-md rounded overflow-hidden shadow-lg mb-3 text-center">
            <img className="w-full" src={dinosaur.imageUrl} alt={dinosaur.name}/>
            <div className="font-bold text-xl mb-3">{dinosaur.name}</div>
              <h1 className="text-gray-700 text-base mb-3">
                £{dinosaur.pricePerShare} per Share
              </h1>
              <h1 className="text-gray-700 text-base mb-3">
                Amount of shares = {dinosaur.quantity}
              </h1>           
            <div className='justify-center space-x-10'>
                <button className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full"
                 onClick={() => dispatch(incrementQuantity(dinosaur.quantity))}>
                  +
                </button>
                <button className="bg-orange hover:bg-white hover:text-orange text-white font-bold py-2 px-4 mb-2 rounded-full" 
                 onClick={() => dispatch(decrementQuantity(dinosaur.quantity))}>
                  -
                </button>
                <button className="bg-red hover:bg-white hover:text-red text-white font-bold py-2 px-4 mb-2 rounded-full"
                  onClick={() => dispatch(removeFromCart(dinosaur.quantity))}>
                  x
                </button>
              </div>
            <p className="font-bold text-xl mb-0">£ {dinosaur.quantity * dinosaur.pricePerShare}</p>
          </div>

        ))}
        <div className="max-w-md rounded overflow-hidden shadow-lg mb-3 py-2 px-4 h-25 text-center">
          <h1 className="font-bold text-xl mb-5">Proceed to checkout</h1>
          <h1 className="font-bold text-xl mb-10">Total to pay</h1>

          <div className='grid place-items-center'>
        <Link href="/checkout" >
        <button className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full">
          Checkout
        </button>
      </Link>
      </div>
        </div>
      </div>
    )}
  </div>
);
}
 
export default CartPage;