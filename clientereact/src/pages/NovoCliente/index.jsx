import './styles.css'
import {FiCornerDownLeft ,FiUserPlus} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function NovoCliente(){
    return(
        <div className='novo-cliente-container'>
            <div className='content'>                
                <section className='form'>
                    <FiUserPlus size="105" color="#FFFFFF"/>    
                    <h1>Texto</h1>
                    <Link className='back-link' to="/clientes">
                        <FiCornerDownLeft size="25" color='#FFFFFF'/>
                        Voltar
                    </Link>
                    <form action="">
                        <input type="text" placeholder='Nome'/>
                        <input type="text" placeholder='Idade'/>
                        <input type="text" placeholder='E-mail'/>
                        <button className='button' type='submit'>Texto</button>
                    </form>
                </section>
            </div>

        </div>
    )
}