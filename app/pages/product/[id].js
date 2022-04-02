import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'

const Product = ({dinosaurs}) => {
  const router = useRouter();
  const path = router.query.id
  console.log(path)
  console.log(dinosaurs)
   
  return ( 
    <div className={styles.container}>
        <Head>
          <title>eDino | Product</title>
          <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Product
          </h1>   
        </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const dinosaurs = await res.json()
  return {
    props: {
      dinosaurs,
    },
  }
}
export default Product;