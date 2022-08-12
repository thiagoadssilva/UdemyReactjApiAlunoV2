import './styles.css'
import {FiCornerDownLeft ,FiUserPlus} from 'react-icons/fi'
import {Link, useParams} from 'react-router-dom'

export default function NovoCliente(){
    const {clienteId} = useParams();
    

    console.log(clienteId)

    return(
        <div className='novo-cliente-container'>
            <div className='content'>                
                <section className='formulario'>
                    <div className='cadastro-esquerdo'>
                        <FiUserPlus size="105" color="#FFFFFF"/>    
                        <h1>{clienteId === '0' ? 'Cadastre Cliente' : 'Atualizar Cliente'}</h1>
                        <Link className='back-link' to="/clientes">
                            <FiCornerDownLeft size="25" color='#FFFFFF'/>
                            Voltar
                        </Link>
                    </div>
                    <div className='cadastro-direito'>
                        <form className="cadastro-direito-form">
                            <input type="text" placeholder='Nome'/>
                            <input type="text" placeholder='Idade'/>
                            <input type="text" placeholder='E-mail'/>
                            <button className='button' type='submit'>{clienteId === '0' ? 'Cadastrar' : 'Atualizar'}</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    )
}