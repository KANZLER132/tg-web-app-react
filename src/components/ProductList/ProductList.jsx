import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import photo from './1.jpg';
import photo2 from './3.jpg';
import photo1 from './4.jpg'


const products = [
    {id: '1', title: 'MITSUBI FG20T, 2022', description: '2 020 000 с НДС', img: photo},
    {id: '2', title: 'MITSUBI FG25T, 2022', description: '2 120 000 с НДС', img: photo1},
    {id: '3', title: 'MITSUBI FG30T, 2022', description: '2 520 000 с НДС', img: photo2},
    {id: '4', title: 'MITSUBI FG15T, 2022', description: '1 020 000 с НДС', img: photo},
]



const ProductList = () => {
    const {tg, queryId} = useTelegram();

    let addedItem = "hello";

    const onSendData = useCallback( () => {
        const data = {
            addedItem,
            queryId,
        }

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
        tg.MainButton.color = "#f8a818";
        tg.MainButton.setParams({
           text: `Выбрать конфигурацию ${product.title}`
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