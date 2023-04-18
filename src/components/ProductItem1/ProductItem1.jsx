import React from 'react';
import Button from "../Button/Button";
import './ProductItem1.css';





const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }




    return (
        <div className={'product ' + className}>
            <img className={'scale'} src={product.img}  alt="..." loading={"lazy"}/>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Заказать ТО
            </Button>

        </div>
    );
};

export default ProductItem;