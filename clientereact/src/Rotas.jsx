import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import Clientes from './pages/Clientes';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/clientes' element={<Clientes />}></Route>
            </Routes>
        </BrowserRouter>
    )
}