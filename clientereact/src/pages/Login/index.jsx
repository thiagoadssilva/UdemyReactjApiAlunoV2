import './styles.css';
import logoImage from '../../assets/01.svg';

import {useState} from 'react'
import api from '../../services/api'
import {useNavigate} from 'react-router-dom'


/*
{
  "email": "thiago.ads.silva@gmail.com",
  "confirmPassword": "Numsey#123"
}
*/

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function login(event){
        event.preventDefault()

        const data ={
            email,
            password
        }

        try {
            const response = await api.post( '/api/Account/LoginUser', data)

            localStorage.setItem('email', email)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('expiration', response.data.expiration)

            navigate('/alunos')

        } catch (error) {
            alert('O login falhou ->' + error)
            //alert('O login falhou ->' + error.response.data)
        }
    }


    return(
        <div className='login-container'>
            <section className='section-container'>
                <img src={logoImage} className="logo" alt="Imagem do Login" srcset="" />
                <form onSubmit={login} className='inputs' action="">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'/>
                    <button>Entrar</button>
                </form>
            </section>
        </div>
    )
}