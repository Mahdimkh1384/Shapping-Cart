import React, { useContext } from 'react'
import "./Modal.css"
import { MdCancel } from "react-icons/md";
import productContexts from '../../Contexts/productContext';

export default function Modal() {

    const ShowModal = useContext(productContexts)

    return (
        <div className= {ShowModal.isShowModal ? "modal show" : "modal"} >
            <h2>محصول مورد نظر به سبد خرید اضافه شد</h2>
            <MdCancel className='cancelLogo' onClick={()=> {
                ShowModal.setIsShowModal(false)
            }}/>
        </div>
    )
}
