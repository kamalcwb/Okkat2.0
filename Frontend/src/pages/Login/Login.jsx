import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div className={styles.webname}>
          <span className={styles.logo}>okkat</span>
          <p className={styles.info}>Conecte-se com o mundo</p>
        </div>
      </div>
      <div className={styles.right}>
        <form action='' className={styles.infoForm}>
          <h3>Entrar</h3>
          <div>
            <input type="text" className={styles.infoInput} name="email" placeholder='Seu Email' />
          </div>
          <div>
            <input type="password" className={styles.infoInput} name="password" placeholder='Senha' />
          </div>
          <div className={styles.login}>
            <span>Ainda não tem uma conta? <a href='/login'>Criar conta</a></span>
          </div>
          <button type='submit' className={styles.button}>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login