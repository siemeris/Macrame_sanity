import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const Header = ({heroBanner}) => {
  return (
<div className="p-1 text-center">
{/* <div style={{ backgroundImage: `url(${background})` }}> */}
      
    
    <h1 className="site-title mb-3">Estiesta Macramé</h1>
    <p className="site-tagline mb-3">Handmade in Manzanares</p>
  
  </div>
  )
}

export default Header
