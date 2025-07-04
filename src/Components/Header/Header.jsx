import React, { useContext } from 'react'
import "./Header.css"
import { LuShoppingBasket } from "react-icons/lu";
import productContexts from '../../Contexts/productContext';

export default function Header() {

    const showBasket = useContext(productContexts)
    const basketSize = useContext(productContexts)

    const openBasket = () => {
        showBasket.setIsShowBasket(true)
    }


    return (
        <div className='header'>
            <div className='nav-bar'>
                <div className='logo-container'>
                    <h1 className='shopName'>Digi Shop</h1>
                    <h2 className='page'>خانه</h2>
                </div>
                <div className='basket-div'>
                    <LuShoppingBasket className='basket-logo' onClick={openBasket} />
                    <div className='basket-size'>{basketSize.basketData.length}</div>
                </div>
            </div>

        </div>
    )
}
