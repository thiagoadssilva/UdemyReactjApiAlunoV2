import './styles.css'
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function Clientes(){
    return(
        <div className='cliente-container'>

            <header>
                <span>Seja Bem-Vindo <strong>Thiago jose da silva</strong>!</span>
                <div>
                    <Link className='button' to="cliente/novo/0"><button>Novo Cliente</button></Link>
                    <span className='botao-fechar'><FiXCircle size={35} color="$17202a" /></span>
                </div>
                
            </header>

            <div className='pesquisa'>
                <input type="text" placeholder='Nome'/>
                <button type='button'>Filtrar cliente por nome (parcial)</button>
            </div>

            <form action="" >
                
                <div class="card">
                    <div class="container">
                        <b>Thiago jose da silva</b>
                        <b>thiago.ads.silva@gmail.com</b>
                        <b>37 anos</b>
                    </div>
                    <div className='card-botao'>
                        <span className='botao-fechar'><FiEdit size={35} /></span>
                        <span className='botao-fechar'><FiUserX size={35} /></span>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <b>Thiago jose da silva</b>
                        <b>thiago.ads.silva@gmail.com</b>
                        <b>37 anos</b>
                    </div>
                    <div className='card-botao'>
                        <span className='botao-fechar'><FiEdit size={35} /></span>
                        <span className='botao-fechar'><FiUserX size={35} /></span>
                    </div>
                </div>
                
            </form>

        </div>
    )
}