import { useState, React } from "react"
import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [msg, setMsg] = useState({
    type: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    const loginUser = {
      email: email,
      password: password
    }

    fetch("http://localhost:5000/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginUser),
    })
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          console.log(res)
          throw Error(res.error)
        } else
          setTimeout(() => {
            // navigate('/home')
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
    <div className={styles.login}>
      <div className={styles.left}>
        <div className={styles.webname}>
          <span className={styles.logo}>okkat</span>
          <p className={styles.info}>Conecte-se com o mundo</p>
        </div>
      </div>
      <div className={styles.right}>
        <form action='' className={styles.infoForm} onSubmit={handleSubmit}>
          <h3>Entrar</h3>
          <div>
            <input
              type="text"
              className={styles.infoInput}
              name="email"
              placeholder='Seu Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className={styles.infoInput}
              name="password"
              placeholder='Senha'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.login}>
            <span>Ainda não tem uma conta? <a href='/register'>Criar conta</a></span>
          </div>
          <button type='submit' className={styles.button}>Entrar</button>
          {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
          {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}
        </form>
      </div>
    </div>
  )
}

export default Login