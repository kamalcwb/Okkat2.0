import React from 'react'
import styles from './Register.module.css'

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.left}>
                <div className={styles.webname}>
                    <h1>okkat</h1>
                    <h6>Conecte-se com o mundo</h6>
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
                    <input type="text" className={styles.infoInput} name="name" placeholder='seu nome' />
                    <input type="text" className={styles.infoInput} name="surname" placeholder='seu sobrenome' />
                </div>
                <div>
                    <input type="text" className={styles.infoInput} name="username" placeholder='seu nome de usuário' />
                </div>
                <div>
                    <input type="text" className={styles.infoInput} name="email" placeholder='seu email' />
                </div>
                <div>
                    <input type="password" className={styles.infoInput} name="password" placeholder='sua senha' />
                    <input type="password" className={styles.infoInput} name="confirmPassword" placeholder='confirme sua senha' />
                </div>
            </form>
        </div>
    )
}

export default Register
