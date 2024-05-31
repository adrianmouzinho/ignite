import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'
import styles from './comment.module.css'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)
  const [hasClickedOnLike, setHasClickedOnLike] = useState(false)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    if (hasClickedOnLike) {
      setLikeCount((likeComment) => likeComment - 1)
      setHasClickedOnLike(false)
      return
    }
    
    setLikeCount((likeComment) => likeComment + 1)
    setHasClickedOnLike(true)
  }

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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <button onClick={handleLikeComment} className={styles.action}>
          <ThumbsUp weight="bold" size={20} />
          Aplaudir {likeCount > 0 && `• ${likeCount}`}
        </button>
      </div>
    </div>
  )
}