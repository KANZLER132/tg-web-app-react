import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }
    return (
        <div className={'product ' + className}>
            <img src = "images/1.jpg" alt = "" className={'img'}/>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Выбрать конфигурацию
            </Button>

        </div>
    );
};

export default ProductItem;