import React from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";
import {useTelegram} from "../../hooks/useTelegram";
const ProductItem = ({product, className}) => {

    // const atChoiceHandler = () => {
    //     atChoice(product);
    // }
    const tg = useTelegram();
    return (
        <div className={'product ' + className}>
            <div className = {'img'}/>
            <div className = {'title'}>{product.title}</div>
            <div className = {'description'}>{product.description}</div>
            <Button className = {'add-btn'} onClick = {tg.openTelegramLink('https://core.telegram.org/bots/webapps#initializing-web-apps')}>
                Выбрать конфигурацию
            </Button>

        </div>
    );
};

export default ProductItem;