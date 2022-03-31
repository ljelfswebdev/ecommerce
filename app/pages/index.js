import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>eDino</title>
        <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <h1 className={styles.title}>
          Welcome to eDino
        </h1> 
        <div className={styles.container}>
          <img className="object-fill" src="./images/homepage.jpg" alt="t-rex" />
        </div> 
        <h2 className={styles.title}>
          Buy shares in a dinosaur!!!
        </h2>  
      </main>
    </div>
  )
}
