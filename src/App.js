import './App.css';
import { use, useState } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import productsData from './Datas';
import productContexts from './Contexts/productContext';
import Modal from './Components/Modal/Modal';
import Basket from './Components/Basket/Basket';


function App() {

  const [allProductData, setAllProductData] = useState(productsData)
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowBasket , setIsShowBasket] = useState(false)
  const [basketData , setBasketData] = useState([])

  
  return (

    <productContexts.Provider value={
      {
        allProductData,
        isShowModal,
        setIsShowModal,
        isShowBasket,
        setIsShowBasket,
        basketData,
        setBasketData
      }
    }>
      <Basket/>
      <Header />
      <Modal />
      <div className='title-container'>
        <div className='left-line'></div>
        <h1 className='title'>محصولات</h1>
        <span className='right-line'></span>
      </div>
      <Products />
    </productContexts.Provider>
  );
}

export default App;
