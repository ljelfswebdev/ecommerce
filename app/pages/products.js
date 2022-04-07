import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Products = ({dinosaurs}) => {
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
          <div>
          {
            dinosaurs.map((dino) => (

              <div key={dino.id} className="max-w-md rounded overflow-hidden shadow-lg mb-3 hover:bg-green text-center">
                <img className="w-full" src={dino.imageUrl} alt={dino.name}/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{dino.name}</div>
                  <p className="text-gray-700 text-base">
                    {dino.info}
                  </p>
                  <h1 className="text-gray-700 text-base">
                    {dino.pricePerShare} per Share
                  </h1>          
                </div>
                <Link href={`/product/${dino.name}`} >
                  <button className="bg-green2 hover:bg-white hover:text-green2 text-white font-bold py-2 px-4 mb-2 rounded-full">
                    More Info
                  </button>
                </Link>
                
              </div>
            ))
          }
          </div> 
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
export default Products;