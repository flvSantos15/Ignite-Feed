import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/flvSantos15.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Flavio Santos</strong>
              <time title='18 de Julho ás 18:50' dateTime='2022-07-18 18:50:30'>
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={onDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          {/* <p>Muito bom Devom, parabéns!! 👏👏 </p> */}
          <p>{content}</p>
        </div>

        <footer>
          <button title="Curtir comentário">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}