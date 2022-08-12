import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login'
import Clientes from './pages/Clientes'
import NovoCliente from './pages/NovoCliente'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />}></Route>
                <Route path='/clientes'  element={<Clientes />}></Route>
                <Route path='/cliente/novo/:clienteId'  element={<NovoCliente />}></Route>
            </Routes>
        </BrowserRouter>
    )
}