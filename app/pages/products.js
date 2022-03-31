import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Products = () => {
    return ( 
    <div className={styles.container}>
        <Head>
          <title>eDino | Products </title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Products
          </h1>   
        </main>
    </div>
     );
}
 
export default Products;