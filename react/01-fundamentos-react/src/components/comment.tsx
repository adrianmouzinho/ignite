import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'
import styles from './comment.module.css'

export interface Comment {
  content: string
  likes: number
}

interface CommentProps {
  comment: Comment
  onDeleteComment: (content: string) => void
  onLikeComment: (content: string) => void
  onDislikeComment: (content: string) => void
}

export function Comment({ comment, onDeleteComment, onLikeComment, onDislikeComment }: CommentProps) {
  const { content, likes } = comment

  // const [likeCount, setLikeCount] = useState(0)
  const [hasClickedOnLike, setHasClickedOnLike] = useState(false)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    if (hasClickedOnLike) {
      // setLikeCount((likeComment) => likeComment - 1)
      onDislikeComment(content)
      setHasClickedOnLike(false)
      return
    }
    
    // setLikeCount((likeComment) => likeComment + 1)
    onLikeComment(content)
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
          Aplaudir {likes > 0 && `• ${likes}`}
        </button>
      </div>
    </div>
  )
}