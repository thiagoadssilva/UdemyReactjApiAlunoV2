import './styles.css';
import logoImage from '../../assets/01.svg';

export default function Login(){
    return(
        <div className='login-container'>
                <section className='section-container'>
                    <img src={logoImage} className="logo" alt="Imagem do Login" srcset="" />
                    <form className='inputs' action="">
                        <input type="text" placeholder='E-mail' />
                        <input type="password" placeholder='Senha'/>
                        <button>Entrar</button>
                    </form>
            </section>
        </div>
    )
}