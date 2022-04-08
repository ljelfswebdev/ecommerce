import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Continue = () => {
    return ( 
    <div className={styles.container}>
        <Head>
          <title>eDino | Continue Shopping</title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Do you wish to continue shopping?
          </h1>   
          <div className='flex flex-wrap mb-10 mt-10 justify-center space-x-7'>
              <div>
              <Link href="/products" >
                <button className="bg-green hover:bg-green2 hover:text-green text-green2 font-bold py-2 px-4 mb-2 rounded-full">
                Continue Shopping
                </button>
              </Link>
              </div>
              <div>
              <Link href="/cart" >
                <button className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-12 mb-2 rounded-full">
                Go to Cart
                </button>
              </Link>
              </div>
          </div>
        </main>
    </div>
     );
}
 
export default Continue;