import './styles.css';
import logoImage from '../../assets/01.png';

export default function Login(){
    return(
        <div className='login-container'>
            <img src={logoImage} className="logo" alt="Imagem do Login" srcset="" />
            <section className='form'>
                <form action="">
                    <input type="text" placeholder='E-mail' />
                    <input type="password" placeholder='Senha'/>
                    <input type="button" value="Entrar" />
                </form>
            </section>
        </div>
    )
}