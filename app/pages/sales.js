import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Sales = () => {
    return ( 
    <div className={styles.container}>
        <Head>
          <title>eDino | Sales</title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Sales
          </h1>   
        </main>
    </div>
     );
}
 
export default Sales;