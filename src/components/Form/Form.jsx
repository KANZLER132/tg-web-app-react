import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(()=> {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    useEffect(()=> {
        if(!country) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }, [country])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>

            <input
                className={'input'}
                type = "text"
                placeholder={'Страна'}
                value = {country}
                onChange = {onChangeCountry}
            />


            <select value = {subject} onChange = {onChangeSubject} className={'select'}>
                <option value = {'physical'}>Физ.лицо</option>
                <option value = {'legal'}>Юр.лицо</option>
            </select>

        </div>
    );
};

export default Form;