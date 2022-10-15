import React from 'react'
import styles from './Register.module.css'

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.left}>
                <div className={styles.webname}>
                    <div className={styles.logo}>
                        <h1>okkat</h1>
                    </div>
                    <div className={styles.info}>
                        <h6>Conecte-se com o mundo</h6>
                    </div>

                </div>
            </div>
            <SignUp />
        </div>
    )
}

function SignUp() {
    return (
        <div className={styles.right}>
            <form action='' className={styles.infoForm}>
                <h3>Inscrever-se</h3>
                <div>
                    <input type="text" className={styles.infoInput} name="name" placeholder='Seu Nome' />
                    <input type="text" className={styles.infoInput} name="surname" placeholder='Seu Sobrenome' />
                </div>
                <div>
                    <input type="text" className={styles.infoInput} name="username" placeholder='Nome de Usuário' />
                </div>
                <div>
                    <input type="text" className={styles.infoInput} name="email" placeholder='Seu Email' />
                </div>
                <div>
                    <input type="password" className={styles.infoInput} name="password" placeholder='Senha' />
                    <input type="password" className={styles.infoInput} name="confirmPassword" placeholder='Confirme sua Senha' />
                </div>
                <div className={styles.login}>
                    <span>Já tem uma conta? <a href='/login'>ENTRAR</a></span>
                </div>
                <button type='submit' className={styles.button}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register
