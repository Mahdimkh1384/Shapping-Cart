import React, { useContext, useEffect } from 'react'
import "./Products.css"
import productContexts from '../../Contexts/productContext'


export default function Products() {

    const contextData = useContext(productContexts)
    const ShowModal = useContext(productContexts)
    const basket = useContext(productContexts)

    const addProduct = (product) => {

        let isInBasket = basket.basketData.some(bagInfo => bagInfo.name === product.name)

        if (!isInBasket) {
            ShowModal.setIsShowModal(true)

            setTimeout(() => {
                ShowModal.setIsShowModal(false)
            }, 3000)

            let newBasketProduct = {
                id: basket.basketData.length + 1,
                name: product.name,
                img: product.img,
                price: product.price,
                count: 1
            }
            basket.setBasketData(prev => [...prev, newBasketProduct])
        } else {
            let basketData = [...basket.basketData]

            basketData.some(info => {
                if (info.name === product.name) {
                    info.count += 1
                    return true
                }
            })

            basket.setBasketData(basketData)
        }




    }
    return (
        <>
            {contextData.allProductData.map(productSection => (
                <>
                    <h2 className='product-title'>{productSection.title}</h2>
                    <div className='products-list'>
                        {productSection.info.map(product => (
                            <div className='product-box' key={product.id}>
                                <img src={product.img} className='productImg' />
                                <h2>{product.name}</h2>
                                <h3>T {product.price} </h3>
                                <div className='btn-container'>
                                    <button className='addProductBtn' onClick={() => addProduct(product)}>اضافه کردن به سبد خرید</button>
                                    <button className='moreInfoBtn'> اطلاعات بیشتر</button>
                                </div>
                                <div className='product-count'>موجودی انبار :{product.count}</div>
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </>
    )
}
