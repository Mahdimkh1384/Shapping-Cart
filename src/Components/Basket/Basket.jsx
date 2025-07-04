import React, { useContext } from 'react'
import "./Basket.css"
import { MdOutlineCancel } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import productContexts from '../../Contexts/productContext';

export default function Basket() {

    const showBasket = useContext(productContexts)
    const basket = useContext(productContexts)

    const closeBasket = () => {
        showBasket.setIsShowBasket(false)
    }

    const removeProduct = (name) =>{
        let newBasketInfo = basket.basketData.filter(info => {
            return info.name !== name
        })

        basket.setBasketData(newBasketInfo)
    }

    return (
        <div className={showBasket.isShowBasket ? "basket" : "basket hide"}>
            <div className='basket-container'>
                <div className='bag-header'>
                    <div className='bag-title'>
                        <IoBagOutline className='bag-logo' />
                        <h3>Bag</h3>
                    </div>
                    <MdOutlineCancel className='cancel-logo' onClick={closeBasket} />
                </div>
                <hr />
                <div className='product-box-list'>
                    {!basket.basketData.length && (<h1>سبد خرید خالی است</h1>)}
                    {basket.basketData.map(product => (
                        <div className='baskets-product-box' key={product.id}>
                            <img src={product.img} className='productImg' />
                            <h2>{product.name}</h2>
                            <h3>T {product.price}</h3>
                            <div className='btn-container'>
                                <button className='remove-product-btn' onClick={() =>removeProduct(product.name)}>حذف</button>
                            </div>
                            <div className='count-control'>
                                <button className='minus-count'>-</button>
                                <div >تعداد : {product.count}</div>
                                <button className='plus-count'>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


