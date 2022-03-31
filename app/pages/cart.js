import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Cart = () => {
    return ( 
    <div className={styles.container}>
        <Head>
          <title>eDino | Cart</title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Cart
          </h1>   
        </main>
    </div>
     );
}
 
export default Cart;