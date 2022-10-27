import { Modal, useMantineTheme } from '@mantine/core';
import styles from './ProfileModal.module.css';

function ProfileModal({ modalOpen, setModalOpen }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
        >
            <form className={styles.infoForm}>
                <h3>Seu Perfil</h3>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='nome'
                        placeholder='Nome'
                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='cidade'
                        placeholder='Mora em'
                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='trabalho'
                        placeholder='Trabalha em'
                    />
                </div>
                <div>
                    <input className={styles.infoInput}
                        type='text'
                        name='relacionamento'
                        placeholder='Status de relacionamento'
                    />
                </div>
                <div>
                    Foto de Perfil
                    <input
                        type='file'
                        name='fotoPerfil'
                    />
                </div>
                <div>
                    Foto de Capa
                    <input
                        type='file'
                        name='fotoCapa'
                    />
                </div>
                <button className={styles.button}>Atualizar</button>
            </form>
        </Modal >
    );
}

export default ProfileModal