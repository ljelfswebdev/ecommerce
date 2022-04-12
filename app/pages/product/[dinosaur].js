import dinosaurs from '../api/data/dinosaurs.json'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { useState, useEffect } from "react";

export async function getStaticPaths() {
    const paths = dinosaurs.map(dinosaur => ({
      params: { dinosaur: dinosaur.name }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const dinosaur = dinosaurs.find(dinosaur => dinosaur.name === params.dinosaur)
  return { props: { dinosaur } }
}


export default function Dinosaur({ dinosaur }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();



  return (

    <div className={styles.container}>
    <Head>
      <title>eDino | {dinosaur.name} </title>
      <meta name="description" content="eCommerce site where you can buy shares in dinosaurs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className='flex flex-wrap mb-10 mt-10 justify-center space-x-10'>
      <div className='dino'>
        <div key={dinosaur.id} className="max-w-md rounded overflow-hidden shadow-lg mb-3 text-center">
          <img className="w-full" src={`../${dinosaur.imageUrl}`} alt={dinosaur.name}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{dinosaur.name}</div>
            <div className="text-l mb-2">-{dinosaur.meaningOfName}</div>
                 
              <p className="text-gray-700 text-base">
                Diet - {dinosaur.diet}
              </p>
              <p className="text-gray-700 text-base">
                Max Length - {dinosaur.length}
              </p>
              <p className="text-gray-700 text-base mb-4">
                Period Alive - {dinosaur.period}
              </p>   
              <p className="text-gray-700 text-base">
                {dinosaur.info}
              </p>    
            </div>     
        </div>
      </div>
      <div className='cart'>
      <div className="max-w-md rounded overflow-hidden shadow-lg mb-3 text-center">    
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Buy Now</div>
              <h1 className="text-gray-700 text-base mb-3">
                £{dinosaur.pricePerShare} per Share
              </h1>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-60">
                  <select value={value} onChange={(e) => {setValue(e.target.value)}} className="form-select appearance-none
                    block
                    w-full
                    px-3
                    text-center
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option>Amount of Shares ▼ </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                      <option value="6">Six</option>
                      <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      <option value="9">Nine</option>
                      <option value="10">Ten</option>
                  </select>
                </div>
              </div>
              <div className='mb-3'>
                Total Cost = £{dinosaur.pricePerShare * value}
              </div>
              <Link href="/continue" >
                <button 
                  onClick={() => dispatch(addToCart(dinosaur))}
                  disabled={!value}
                  className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full">
                  Add to Cart
                </button>
              </Link>         
            </div>     
        </div>
      </div>
      </div>
      <div className='grid place-items-center'>
        <Link href="/products" >
        <button className="bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full">
          Go Back
        </button>
      </Link>
      </div>
      
    </div>
  )
}