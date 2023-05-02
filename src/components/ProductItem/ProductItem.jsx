import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import "./ProductItem.css";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from "../Modal/modal";
import Slider from "../Slider/slider";

import photo2 from "./free-icon-search-6194755.png";
import photo1 from "./free-icon-configuration-1371773.png";
import photo3 from "./free-icon-phone-receiver-5194744.png";




const ProductItem = ({product, className, atChoice}) => {

    const atChoiceHandler = () => {
        atChoice(product);
    }

    const [modalActive, setModalActive] = useState(false);




    return (
        <div className={'product ' + className}>


            <LazyLoadImage
                effect={"blur"}
                src = {product.img}
                alt = {"..."}
                className = {'scale'}
                onClick={() => setModalActive(true)}
            />

            <div className = {'title1'}>{product.title}</div>
            <div className = {'description1'}>{product.description}</div>
            <div className = {'icons'}>
                <img className={'icon'} src = {photo1} alt = "" onClick = {atChoiceHandler}/>
                <img className={'icon1'} src = {photo2} alt = "" onClick={() => setModalActive(true)}/>
                <a href = "tel:+78002503090"><img className={'icon2'} src = {photo3} alt = "" /></a>
            </div>
            {/*<Button className = {'add-btn'} onClick = {atChoiceHandler}>*/}
            {/*    Конфигуратор*/}
            {/*</Button>*/}
            <Modal active = {modalActive} setActive = {setModalActive}>

                <Slider
                    product={product}
                />

                <div className={"block"}>


                    <p className={'bondP'}>Новый бензиновый вилочный погрузчик MITSUBI FG20T✅</p>

                    <p className={'bondP'}>➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️</p>


                    <p className = {'bondP'}>🚜Технические характеристики:</p>

                    <p className={'innerP'}>• Грузоподъемность 2000 кг Высота подъема 3м АКПП</p>
                    <p className={'innerP'} >• Вилы 1200 мм</p>


                    <p className = {'bondP'}>💸Форма оплаты:</p>

                    <p className={'innerP'}>• Лизинг с минимальным авансом (5%)</p>
                    <p className={'innerP'}>• Лизинг для ИП</p>
                    <p className={'innerP'}>• Лизинг для ООО (зарегистрированное от 3 мес)</p>
                    <p className={'innerP'}>• Кредит для юр.лиц и физ.лиц</p>
                    <p className={'innerP'}>• Безналичный расчет по банку</p>


                    <p className = {'bondP'}>⭐️Техническая поддержка по всей территории РФ.</p>

                    <p className = {'bondP'}>✅Гарантия 5 лет или 5000 м.ч</p>
                </div>

            </Modal>

        </div>
    );
};

export default ProductItem;