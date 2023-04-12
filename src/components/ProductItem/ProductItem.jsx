import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
import {Image} from 'react-native';

const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }


    return (
        <div className={'product ' + className}>
            <div>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
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