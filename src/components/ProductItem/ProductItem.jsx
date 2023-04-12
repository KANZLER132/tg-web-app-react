import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
import "./image.jsx";

const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }



    return (
        <div className={'product ' + className}>
            <div>
                <Image
                    src = {"images/2.jpg"}
                    alt = {"Loading"}
                    className = {"img"}
                />
            </div>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Выбрать конфигурацию
            </Button>

        </div>
    );
};

export default ProductItem;