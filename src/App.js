import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductList/ProductList";
import ProductList1 from "./components/ProductList1/ProductList1";
import {CSSTransition} from "react-transition-group";

function App() {
    const {tg} = useTelegram();

    useEffect(()=>{
        tg.ready();
    }, [])
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setShow(!show)
        }, 0)
    }, [])

    return (
        <section>

            <CSSTransition in = {show} classNames = 'alert' timeout = {1} unmountOnExit>
                <div className="App">
                    <Header />
                    <Routes>
                    <Route index element = {<ProductList />}/>
                    <Route path = {'service'} element={<ProductList1 />}/>
                    </Routes>
                </div>
            </CSSTransition>
        </section>

    )
}

export default App;

