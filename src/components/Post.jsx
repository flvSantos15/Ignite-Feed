import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/flvSantos15.png' />
          <div className={styles.authorInfo}>
            <strong>Flavio Santos</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title='18 de Julho ás 18:50' dateTime='2022-07-18 18:50:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>

        <p>Acabei de subir mais um projeto no meu portipólio. É um projeto que fiz no NLW Return,
          evento da Rocketseat. O nome do projeto é DoctorCare.</p>

        <p>{' '}<a href=''>flvSantos/ignite-feed</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
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
        {/* <h1>Comentário</h1> */}
        <Comment />
      </div>
    </article>
  )
}