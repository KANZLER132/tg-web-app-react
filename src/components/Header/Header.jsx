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
                Погрузчики / Услуги
            </span>
            
        </div>
    );
};

export default Header;