import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick = {onClose}>Закрыть</Button>
            <span className={'nav'}>
                <a className={'underline-link'} href = "#">Вилочные погрузчики </a>
                <a className={'SepLink'} href = "#">/</a>
                <a className={'underline-link'} href = "#"> Услуги</a>
            </span>
            
        </div>
    );
};

export default Header;