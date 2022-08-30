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
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publisheDateformatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleDeleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((item) => item !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
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
            return <p key={p.content}>{p.content}</p>
          } else if (p.type === 'link') {
            return <p key={p.content}><a href=''>{p.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>

        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='deixe um comentário'
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={() => handleDeleteComment(comment)}
            />
          )
        })}
      </div>
    </article>
  )
}