import { useLayoutEffect, useState } from 'react';
import axios from 'axios';

import { IProduct } from '../interfaces/IResProduct';

import "./list-item.scss"

interface props {
    product: IProduct
}

export const ListItem = ( { product }: props ) => {
    // AMOUNT CONTROLLER
    const [amount, setAmount] = useState<number>(product.amount);
    const [timerAmount, setTimerAmount] = useState<string | boolean>("");
    
    const checkTimer = (timerAmount === true || timerAmount === "");
    const changePlusAmount = () => {
        if (amount < 50) {
            setAmount(amount + 1);
            if (checkTimer) setTimerAmount(false);
    }}

    const changeSubAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1); 
            if (checkTimer) setTimerAmount(false);
    }}

    useLayoutEffect(() => {
        if (timerAmount === false) {setTimeout(()=>{setTimerAmount(true)},1000)}
        if (timerAmount === true) {axios.put(`https://node-ts-load-drink.onrender.com/api/product/amount/${product._id}`, {newAmount: amount})}
    }, [timerAmount])



    // RENDER
    return (
        <div className='list-item'>
            <div className='container-list-description'>
                <p className='text-brand-list'>{product.brand}</p>

                <p className='text-flavor-list'>{product.flavor + " " + product.size} </p>

                <p className='text-category-list'>{product.category} </p>

                <p className='text-location-list'>&#35;{product.location}</p>
            </div>

            <div className='container-button-amount'>
                <i className="fa-solid fa-chevron-left" onClick={changeSubAmount}/>
                <p>{amount}</p>
                <i className="fa-solid fa-chevron-right" onClick={changePlusAmount}/>
            </div>
        </div>
    )
}
