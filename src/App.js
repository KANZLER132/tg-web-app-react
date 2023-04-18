import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductList/ProductList";
import ProductList1 from "./components/ProductList1/ProductList1";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(()=>{
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element = {<ProductList />}/>
                <Route path = {'service'} element={<ProductList1 />}/>
            </Routes>
        </div>
    );
}

export default App;
