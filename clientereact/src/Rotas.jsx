import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login'
import Alunos from './pages/Alunos'
import NovoAluno from './pages/NovoAluno'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />}></Route>
                <Route path='/alunos'  element={<Alunos />}></Route>
                <Route path='/aluno/novo/:alunoId'  element={<NovoAluno />}></Route>
            </Routes>
        </BrowserRouter>
    )
}