import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
import {LazyLoadImage} from "react-lazy-load-image-component/src";





const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }




    return (
        <div className={'product ' + className}>
            <LazyLoadImage className={'scale'} src={product.img}  alt="..."/>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Конфигуратор
            </Button>

        </div>
    );
};

export default ProductItem;