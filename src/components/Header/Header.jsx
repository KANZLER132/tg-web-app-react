import React from 'react';
// import Button from "../Button/Button";
// import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    // const {onClose} = useTelegram();
    return (
        <div className={'header'}>
            <span>
                <a className={'underline-link'} href = {'https://polite-boba-b5f6a5.netlify.app/'}>Вилочные погрузчики </a>
                <a className={'SepLink'} href = {"#"}>/</a>
                <a className={'underline-link'} href = {'https://polite-boba-b5f6a5.netlify.app/service'}> Услуги</a>
            </span>
            {/*<Button onClick = {onClose} className={'closeBtn'}>Закрыть</Button>*/}
        </div>

    );
};

export default Header;