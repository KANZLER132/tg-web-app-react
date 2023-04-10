import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";



const products = [
    {id: '1', title: 'MITSUBI1', description: 'dadada'},
    {id: '2', title: 'MITSUBI2', description: 'fafafaf'},
    {id: '3', title: 'MITSUBI3', description: 'jajaja'},
    {id: '4', title: 'MITSUBI4', description: 'gagaga'},
]



const ProductList = () => {
    const {tg, queryId} = useTelegram();

    let addedItem = "hello";




    const onSendData = useCallback( () => {
        const data = {
           product: addedItem,
            queryId,
        }
        fetch('http://92.53.64.121:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItem])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])



    const atChoice = (product) => {
        addedItem = product.title;
        tg.MainButton.show();
        tg.MainButton.setParams({
           text: `Посмотреть конфигурацию ${product.title}`
        })
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