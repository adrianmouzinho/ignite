import { PencilSimpleLine } from 'phosphor-react'
import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <img src="https://github.com/adrianmouzinho.png" alt="Adrian Mouzinho" />
        <strong>Adrian Mouzinho</strong>
        <span>Web Developer</span>
      </div>

      <div className={styles.action}>
        <a href="#">
          <PencilSimpleLine weight="bold" size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  )
}