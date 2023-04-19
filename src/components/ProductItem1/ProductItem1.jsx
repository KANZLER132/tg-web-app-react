import React from 'react';
import Button from "../Button/Button";
import './ProductItem1.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }




    return (
        <div className={'product ' + className}>
            <LazyLoadImage
                effect={"blur"}
                src = {product.img}
                alt = {"..."}
                className = {'scale'}
            />
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Заказать ТО
            </Button>

        </div>
    );
};

export default ProductItem;