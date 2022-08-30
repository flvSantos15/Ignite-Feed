import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({
  author,
  content,
  publishedAt
}) {
  const [comments, setComments] = useState([])
  const publisheDateformatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(data) {
    event.preventDefault()

    setComments([...comments, data])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publisheDateformatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((p) => {
          if (p.type === 'paragraph') {
            return <p>{p.content}</p>
          } else if (p.type === 'link') {
            return <p><a href=''>{p.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>

        <textarea
          placeholder='deixe um comentário'
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          <Comment />
        })}
      </div>
    </article>
  )
}