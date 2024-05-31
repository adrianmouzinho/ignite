import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'
import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/adrianmouzinho.png" alt="Adrian Mouzinho" />

      <div>
        <div className={styles.content}>
          <header>
            <div>
              <strong>Adrian Mouzinho <span>(você)</span></strong>
              <time title="29 de Maio às 10:13h" dateTime="2024-05-29 10:13:00">Cerca de 2h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <button className={styles.action}>
          <ThumbsUp weight="bold" size={20} />
          Aplaudir • 01
        </button>
      </div>
    </div>
  )
}