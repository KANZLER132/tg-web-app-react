import './ProductList1.css';
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import ProductItem from "../ProductItem/ProductItem";
import photo from './intercara1.png';


const products = [
    {id: '1', title: 'MITSUBI FG20T, 2022', description: '2 020 000 с НДС', img: photo},
    {id: '2', title: 'MITSUBI FD20T, 2022', description: '2 120 000 с НДС', img: photo},
    {id: '3', title: 'MITSUBI FD25T, 2022', description: '2 520 000 с НДС', img: photo},
    {id: '4', title: 'MITSUBI FD35T, 2022', description: '1 020 000 с НДС', img: photo},
    {id: '1', title: 'MITSUBI FG20T, 2022', description: '2 020 000 с НДС', img: photo},
    {id: '2', title: 'MITSUBI FD20T, 2022', description: '2 120 000 с НДС', img: photo},
    {id: '3', title: 'MITSUBI FD25T, 2022', description: '2 520 000 с НДС', img: photo},
    {id: '4', title: 'MITSUBI FD35T, 2022', description: '1 020 000 с НДС', img: photo},
]



// const ProductList1 = () => {
//     const {tg} = useTelegram();
//
//     let str;
//
//     const atChoice = (product) => {
//         str = product.id;
//         tg.MainButton.show();
//         tg.MainButton.color = "#f8a818";
//         tg.MainButton.setParams({
//             text: `Выбрать конфигурацию ${product.title}`
//         })
//     }
//
//     const onSendData = useCallback( () => {
//         const data = {
//             str1: str,
//         }
//
//         tg.sendData(JSON.stringify(data))
//     }, [str])
//
//     useEffect(()=> {
//         tg.onEvent('mainButtonClicked', onSendData)
//         return () => {
//             tg.offEvent('mainButtonClicked', onSendData)
//         }
//     }, [onSendData])
//
//
//
//     return (
//         <div className = {'list'}>
//             {products.map(item => (
//                 <ProductItem
//                     product = {item}
//                     atChoice = {atChoice}
//                     className = {'item'}
//                 />
//             ))}
//         </div>
//     );
// };
const ProductList1 = () => {
    return (
        <div>
            hello world
        </div>
    )

}

export default ProductList1;