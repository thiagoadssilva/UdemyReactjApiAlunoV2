import './styles.css'
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../services/api'

export default function Alunos(){
    
    const [alunos, setAlunos] = useState([])

    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    const navigate = useNavigate();

    const authorization = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() =>{
        api.get('api/alunos', authorization).then(
            response => {
                setAlunos(response.data)
            },
            token
        )
    },[])

    async function logout(){
        try {
            localStorage.clear()
            localStorage.setItem('token', '') 
            authorization.headers = ''
            navigate('/')
        } catch (error) {
            alert('Não foi possível fazer o logout ' + error )
        }
    }

    async function editAluno(id){
        try {
            navigate(`/aluno/novo/${id}`)
        } catch (error) {
            alert('Não foi possível editar o Aluno')
        }
    }

    async function deleteAluno(id){
        try {
            await api.delete(`/alunos/${id}`, authorization)
        } catch (error) {
            alert('Aluno não foi excluído. ' + error)
        }
    }

    return(
        <div className='Aluno-container'>

            <header>
                <span>Seja Bem-Vindo <strong>{email}</strong></span>
                <div>
                    <Link className='button' to="/aluno/novo/0"><button>Novo Aluno</button></Link>
                    <span className='botao-fechar' onClick={logout}><FiXCircle size={35} color="$17202a" /></span>
                </div>
                
            </header>

            <div className='pesquisa'>
                <input type="text" placeholder='Nome'/>
            </div>

            <form action="" >
                <div className='teste'>
                    {alunos.map(aluno =>(
                        <div class="card" key={aluno.id}>
                            <div class="container">
                                <b>{aluno.nome}</b>
                                <b>{aluno.email}</b>
                                <b>{aluno.idade}</b>
                            </div>
                            <div className='card-botao'>
                                <span className='botao-fechar' onClick={() => editAluno(aluno.id)}><FiEdit size={35} /></span>
                                <span className='botao-fechar' onClick={() => deleteAluno(aluno.id)}><FiUserX size={35} /></span>
                            </div>
                        </div>
                    ))}    
                </div>             
            </form>

        </div>
    )
}