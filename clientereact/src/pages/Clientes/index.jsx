import './styles.css'
import {FiXCircle} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import logoCadastro from '../../assets/02.png'

export default function Clientes(){
    return(
        <div className='cliente-container'>

            <header>
                <img src={logoCadastro} alt="Cadastro de Clientes" srcset="" />
                <span>Seja Bem-Vindo <strong>Thiago jose da silva</strong>!</span>
                <Link className='button' to="cliente/novo"><button>Novo Cliente</button></Link>
                <span className='botao-fechar'><FiXCircle size={35} color="$17202a" /></span>
            </header>

            <form action="">
                <div className='pesquisa'>
                    <input type="text" placeholder='Nome'/>
                    <button type='button' className='button'>Filtrar cliente por nome (parcial)</button>
                </div>
                
                <h1>Relação de Clientes</h1>
            </form>

        </div>
    )
}