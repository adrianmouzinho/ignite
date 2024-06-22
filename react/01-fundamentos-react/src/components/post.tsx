import { ChangeEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './avatar'
import { Comment } from './comment'

import styles from './post.module.css'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface Post {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: Post
}

export function Post({ post }: PostProps) {
  const { author, content, publishedAt } = post

  const [comments, setComments] = useState<Comment[]>([])
  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault()

    if (!newCommentText) {
      return
    }

    setComments((comments) => [{ content: newCommentText, likes: 0 }, ...comments])
    setNewCommentText('')
  }

  function handleDeleteComment(commentToDelete: string) {
    setComments((comments) => {
      return comments.filter((comment) => comment.content !== commentToDelete)
    })
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <div className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((block) => {
          if (block.type === 'paragraph') {
            return <p key={block.content}>{block.content}</p>
          } else if (block.type === 'link') {
            return <p key={block.content}><a href="">{block.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.form}>
        <label>
          Deixe seu feedback
          <textarea 
            name="feedback"
            placeholder="Deixe um comentário..."
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          ></textarea>
        </label>
        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
      </form>

      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment.content} 
              content={comment} 
              onDeleteComment={handleDeleteComment}
            />
          )
        })}
      </div>
    </div>
  )
}