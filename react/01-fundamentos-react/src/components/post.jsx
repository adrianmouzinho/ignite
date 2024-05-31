import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './avatar'
import { Comment } from './comment'

import styles from './post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

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
        {content.map((block, i) => {
          if (block.type === 'paragraph') {
            return <p key={i}>{block.content}</p>
          } else if (block.type === 'link') {
            return <p key={i}><a href="">{block.content}</a></p>
          }
        })}
      </div>

      <form className={styles.form}>
        <label>
          Deixe seu feedback
          <textarea 
            name="feedback"
            placeholder="Deixe um comentário..."
          ></textarea>
        </label>
        <button type="submit">Publicar</button>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}