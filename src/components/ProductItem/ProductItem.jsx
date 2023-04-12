import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
// import {Image} from 'react-native';

const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }

    // const styles = StyleSheet.create({
    //     img: {
    //         height: 100,
    //         width: 100,
    //
    //     }
    // })


    return (
        <div className={'product ' + className}>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {atChoiceHandler}>
                Выбрать конфигурацию
            </Button>

        </div>
    );
};

export default ProductItem;