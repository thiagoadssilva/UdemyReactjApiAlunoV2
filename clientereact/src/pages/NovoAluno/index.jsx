import './styles.css'
import {FiCornerDownLeft ,FiUserPlus} from 'react-icons/fi'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react';
import api from '../../services/api';
import { useEffect } from 'react';

export default function NovoAluno(){
    const {alunoId} = useParams() 
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const [id, setId] = useState(null)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')

    const authorization = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    async function loadAluno(){
        try {
            const response = await api.get(`api/alunos/${alunoId}`, authorization)
            
            setId(response.data.id)
            setNome(response.data.nome)
            setEmail(response.data.email)
            setIdade(response.data.idade)
        } catch (error) {
            alert('Erro ao recuperar o aluno. ' + error)
            navigate('/alunos')
        }
    }

    useEffect(() =>{
        if(alunoId === '0'){
            return
        } else{
            loadAluno()
        }

    }, alunoId)

    async function saveOrUpdate(event){
        event.preventDefault()
        const data ={
            nome,
            email,
            idade
        }

        try {
            if(alunoId === '0'){
                await api.post('api/alunos', data, authorization)
            }else{
                data.id = id
                await api.put(`api/alunos/${id}`, data, authorization)
            }
           
        } catch (error) {   
            alert('Erro ao gravar clieten.' + error)
        }
        navigate('/alunos')
    }

    return(
        <div className='novo-aluno-container'>
            <div className='content'>                
                <section className='formulario'>
                    <div className='cadastro-esquerdo'>
                        <FiUserPlus size="105" color="#FFFFFF"/>    
                        <h1>{alunoId === '0' ? 'Cadastre aluno' : 'Atualizar aluno'}</h1>
                        <Link className='back-link' to="/alunos">
                            <FiCornerDownLeft size="25" color='#FFFFFF'/>
                            Voltar
                        </Link>
                    </div>
                    <div className='cadastro-direito'>
                        <form className="cadastro-direito-form" onSubmit={saveOrUpdate}>
                            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}/>
                            <input type="text" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="text" placeholder='Idade' value={idade} onChange={e => setIdade(e.target.value)}/>
                            <button className='button'  type='submit'>{alunoId === '0' ? 'Cadastrar' : 'Atualizar'}</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    )
}