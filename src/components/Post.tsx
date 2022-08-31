import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export interface IAuthor {
  avatarUrl: string
  name: string
  role: string
}

export interface IContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface IPost {
  id?: number
  author: IAuthor
  content: IContent[]
  publishedAt: Date
}

export function Post({
  author,
  content,
  publishedAt
}: IPost) {
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

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function handleDeleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((item) => item !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText ? false : true

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
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
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