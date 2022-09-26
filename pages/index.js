import React from 'react'
import { Product, Header } from '../components';
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
  return (
    <div>
    <Header/>
    
    <div className="products-heading">
    </div>

    <div className="products-container">
      {products?.reverse().map((product) => <Product key={product._id} product={product}/>)}
    </div>

 
  </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}




export default Home