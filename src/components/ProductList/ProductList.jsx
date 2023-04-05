import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Вилочный погрузчик MITSUBI', description: 'dadada'},
    {id: '2', title: 'Вилочный погрузчик MITSUBI2', description: 'fafafaf'},
    {id: '3', title: 'Вилочный погрузчик MITSUBI3', description: 'jajaja'},
]

const getTitle = (items = []) => {
    items.forEach(item => {
        return item.title
    })
}


const ProductList = () => {
    const {tg} = useTelegram();

    const [addedItems, setAddedItems] = useState([]);

    const atChoice = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Посмотреть конфигурацию вилочного погрузчика ${getTitle(newItems)}`
            })
        }


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