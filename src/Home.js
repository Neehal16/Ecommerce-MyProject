
import React, { useState } from 'react';
import ProductList from './ProductList'; 
import SearchBar from './SearchBar'; 

const Home = ({ cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
  { id: 1, name: 'Iphone 7 Plus', price: 29.999, image: 'https://images.wondershare.com/filmora/article-images/xiaomi-m6-4k-smartphone.jpg' },
  { id: 2, name: 'Realme 12 Pro', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaWeOqzsvYueJJ2WN5ZbbaqX0CxYypQ8hqSINQxii_Xb6Y39CYYDfYl8LQia6bvAEZBQ&usqp=CAU' },
  { id: 3, name: 'Samsung Note 12', price: 89.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4yimh3qK1L8e22kTO1-cOXS5QS1wkEsOFg&s' },
  { id: 3, name: 'Samsung S10', price: 33.999, image: 'https://images-cdn.ubuy.co.in/6516c58a20e3333ffe278bd7-samsung-galaxy-s10-4g-smartphone-ram.jpg' },
  { id: 3, name: 'Iphone 13', price: 33.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp5hpvUIKMFTXxnxrqUpboMObXDY7XoH7SA&s' },
  { id: 3, name: 'Moto Edge 50', price: 22.99, image: 'https://diamu.com.bd/wp-content/uploads/2024/06/Motorola-Edge-50-Fusion.jpg' },
  { id: 3, name: 'OnePlus Nord4', price: 34.999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuIbMQ3DB-OII1uOOZwIGpHXmCmiEGboON69Otqxj94vUp0RtS9ZdYLKfMLZQIXNFBZ60OP8-QNLHYp_6wmGerwCrZyArkBRWDVL4E-l0FFoEtXroTvNXRv7bof01otyeorKCjrg&usqp=CAc' },
  { id: 3, name: 'Oppo F27 Pro', price: 32.99, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ5gCCZUjIFTy0VAbgr2tnQXq9q-xKPYMEnA482d-ogtG7MzyL2hJThtkO57bWuUR8vwks6uDmN0nsrnfaumZLGLhAXUrMQCpwEcQRsfIFexe0QBM3hdXuu_mtM3B4oOGh-PBzZV7o&usqp=CAc' },
  { id: 3, name: 'Vivo v29e', price: 42.99, image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1697685970725/b814834cf5a7f64e55a185edde7fb421.png' },
  { id: 3, name: 'Poco x6 5g', price: 17.999, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRs5CtzE01sbnh41Abwq1ltBkO1HUZ2ewPItd3yQPTyy74qGOf6qJrsJbNjm7VxOHlMg_l5hcJafhcDoos5LGCNEtPs5ergUR_7PGwTG9Opau5Yi0O6TEzK-ITRryi-jXpJXbOaTGydDA&usqp=CAc' },
  { id: 3, name: 'Iphone 16', price: 69.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7pt6gCG8eEXNzWWDFvgBxoXV-Y3HVBcigrkq7alqfzUOzDsr1KnKGX0j4E8f9SORu0NWi_y-v-h3rGVkoFUCGDZXA_Lva3y3cqXm4pOXZ_Hs1bX9-eKF1XTxtj1ALnxYcXZVfdUo&usqp=CAc' },
  { id: 3, name: 'Redmi Note13', price: 28.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStIP0ONztPHy-FM2af7cdvY_KKXABqiFxMxrzFxktsJI4BEdqzG7mO0-oha3s65S_dYEMRmqlyv_EjVvpfHp5PnNEQtUYICtl1quYn5BkXwoFMNlQRi3WzSBgfQ1bZtUP7g6XAng&usqp=CAc' },
  { id: 1, name: 'OnePlus CE4', price: 36.999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdK8XRq7NhU-_DJwLOjq5V3xW2Cx0Cc_B5yTaoH9HZSs6dhdYvjq0_wLu0Nphz_5_XvYRWsmyfSiuzIUSnJxPkUma30PXOTPS69gPyajNUv6D-JDgo5ldGMTU3_PNe8WdLcWirAB-ELh0&usqp=CAc' },
  { id: 1, name: 'Vivo v40', price: 49.99, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_kdDpMcWsbbDrg0OeytQj5v6JVUJZVxnwB_jUGFBAq-R9hR9LuXuI1JxjAyXTbCx3geak8kycuGfuWCIWaw4flW_3rzFkU2a0mPYG78E&usqp=CAc' },
  { id: 1, name: 'Samsung s24', price: 66.99, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbYyyYUV_M64FqAcD6iVdNoii2WNLLIqqhSknZaunRBGvg4d44Q-Gl_obNfsepCHZbpcZe0M8Ex04F7fUMVPNZnY1YhwflxFJQp4RzGn_iV1bUm0Ya5IVj-vLecOgvz_3d29SJf34&usqp=CAc' },
  { id: 1, name: 'Iphone 15', price: 53.999, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTf6nLoNp1yml2zfd_1Eb6UkluMGs6X4MtL_JkVe4ou5OcX2yQn5buYoU9EMHG67w3qlTQoUHaZYAyNSCvavLpON6oQDV2jlNx9hN3d6-XotQGLrso3U2IMQvgM_4JUbFB8GhZy_g&usqp=CAc' },
];


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      
      <h4 className="scrolling-text">Biggest Sale Ever & Biggest Savings...</h4>
      
      <h1>Home Page</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
    </div>
  );
};

export default Home; 