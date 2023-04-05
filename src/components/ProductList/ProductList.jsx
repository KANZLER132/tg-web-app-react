// import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
// import {useCallback, useEffect} from "react";
const WebAppUrl = "https://polite-boba-b5f6a5.netlify.app/";

const products = [
    {id: '1', title: 'MITSUBI1', description: 'dadada'},
    {id: '2', title: 'MITSUBI2', description: 'fafafaf'},
    {id: '3', title: 'MITSUBI3', description: 'jajaja'},
    {id: '4', title: 'MITSUBI4', description: 'gagaga'},
]



const ProductList = () => {
    const {tg} = useTelegram();
    let addedItem;

    // const onSendData = useCallback( () => {
    //     const data = {
    //         product: addedItem,
    //         queryId,
    //     }
    //     fetch('http://localhost:8000', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    // }, [])
    //
    // useEffect(()=> {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData)
    //     }
    // }, [onSendData])



    const atChoice = (product) => {
        addedItem = product.title;
        tg.openTelegramLink(WebAppUrl + './form')
        //tg.MainButton.show();
        //tg.MainButton.setParams({
        //    text: `Посмотреть конфигурацию ${product.title}`
        //})

    }



    return (
        <div className = {'list'}>
            {products.map(item => (
                <ProductItem
                    product = {item}
                    atChoice = {atChoice}
                    className = {'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;