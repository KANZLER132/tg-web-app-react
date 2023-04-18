import './ProductList1.css';
import {useTelegram} from "../../hooks/useTelegram";
// import {useCallback, useEffect} from "react";
import ProductItem1 from "../ProductItem/ProductItem";
import photo from './intercara1.png';


const products = [
    {id: '1', title: 'ТО 1', description: '30000р', img: photo},
    {id: '2', title: 'ТО 2', description: '52000р', img: photo},
    {id: '3', title: 'ТО 3', description: '35000р', img: photo},
    {id: '4', title: 'ТО 4', description: '45000р', img: photo},
    {id: '1', title: 'ТО 5', description: '23000р', img: photo},
    {id: '2', title: 'ТО 6', description: '22000р', img: photo},
    {id: '3', title: 'ТО 7', description: '20000р', img: photo},
    {id: '4', title: 'ТО 8', description: '38000р', img: photo},
]



 const ProductList1 = () => {
     const {tg} = useTelegram();

     let str;

     const atChoice = (product) => {
         str = product.id;
         tg.MainButton.show();
         tg.MainButton.color = "#f8a818";
         tg.MainButton.setParams({
             text: `Выбрать  ${product.title}`
         })
     }

     // const onSendData = useCallback( () => {
     //     const data = {
     //         str1: str,
     //     }
     //
     //     tg.sendData(JSON.stringify(data))
     // }, [str])





     // useEffect(()=> {
     //     tg.onEvent('mainButtonClicked', onSendData)
     //     return () => {
     //         tg.offEvent('mainButtonClicked', onSendData)
     //     }
     // }, [onSendData])



     return (
         <div className = {'list'}>
             {products.map(item => (
                 <ProductItem1
                     product = {item}
                     atChoice = {atChoice}
                     className = {'item'}
                 />
             ))}
         </div>
     );
 };


export default ProductList1;