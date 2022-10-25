import { useState, React } from "react"
// import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css'

const Register = () => {
    // const navigate = useNavigate()

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()

    const [msg, setMsg] = useState({
        type: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            confirmPass: confirmPass,
        }
        fetch("http://localhost:5000/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(res => {
                if (res.error) {
                    console.log(res)
                    throw Error(res.error)
                } else
                    setMsg({
                        type: 'success',
                        message: "Usuário cadastrado com sucesso!"
                    });
                setTimeout(() => {
                    // navigate('/login')
                }, 1500)
            })
            .catch((err) => {
                setMsg({
                    type: 'error',
                    message: err.message
                })
            })
    }


    return (
        <div className={styles.register}>
            <div className={styles.left}>
                <div className={styles.webname}>
                    <span className={styles.logo}>okkat</span>
                    <p className={styles.info}>Conecte-se com o mundo</p>
                </div>
            </div>
            <div className={styles.right}>
                <form action='' className={styles.infoForm} onSubmit={handleSubmit}>
                    <h3>Inscrever-se</h3>
                    <div>
                        <input
                            type="text"
                            className={styles.infoInput}
                            name="name"
                            placeholder='Seu Nome'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            className={styles.infoInput}
                            name="lastName"
                            placeholder='Seu Sobrenome'
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className={styles.infoInput}
                            name="username"
                            placeholder='Nome de Usuário'
                            onChange={e => setUserName(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className={styles.infoInput}
                            name="email"
                            placeholder='Seu Email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className={styles.infoInput}
                            name="password"
                            placeholder='Senha'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <input
                            type="password"
                            className={styles.infoInput}
                            name="confirmPassword"
                            placeholder='Confirme sua Senha'
                            onChange={e => setConfirmPass(e.target.value)}
                            value={confirmPass}
                        />
                    </div>
                    <div className={styles.login}>
                        <span>Já tem uma conta? <a href='/login'>ENTRAR</a></span>
                    </div>
                    <button type='submit' className={styles.button}>Cadastrar</button>
                    {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
                    {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}
                </form>
            </div>
        </div>
    )
}

export default Register
