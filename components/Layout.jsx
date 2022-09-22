import React from 'react'
import Head from 'next/head'

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className="layout">
    <Head>
      <title>EstiEsta Macrame </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
    </Head>
    <header>
      <Navbar />
    </header>
    <main className="main-container">
    {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Layout