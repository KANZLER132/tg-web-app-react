import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";



const products = [
    {id: '1', title: 'MITSUBI FG20T, 2022', description: '2 020 000 с НДС', img: "images/2.jpg"},
    {id: '2', title: 'MITSUBI FG25T, 2022', description: '2 120 000 с НДС', img: "images/1.jpg"},
    {id: '3', title: 'MITSUBI FG30T, 2022', description: '2 520 000 с НДС', img: "images/2.jpg"},
    {id: '4', title: 'MITSUBI FG15T, 2022', description: '1 020 000 с НДС', img: "images/3.jpg"},
]



const ProductList = () => {
    const {tg, queryId} = useTelegram();

    let addedItem = "hello";

    const onSendData = useCallback( () => {
        const data = {
            addedItem,
            queryId,
        }
        // fetch('http://92.53.64.121:8000/web-data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        tg.sendData(JSON.stringify(data))
    }, [addedItem, queryId])

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