import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar"

import styles from '../src/App.module.css'
import '../src/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/flvSantos15.png',
      name: 'Flavio Santos',
      role: 'CEO @NerumeStudio'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portipólio. É um projeto que fiz no NLW Return,' },
      { type: 'link', content: 'flvSantos/ignite-feed' },
    ],
    publishedAt: new Date('2022-08-30 18:01:04')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev, Tudo bom com você?! 👋' },
      { type: 'paragraph', content: 'Hoje nós vamos aprender algo novo do nodeJS, então fique esperto, fique esperta, que vamos ter muito conteúdo novo por aqui.' },
      { type: 'link', content: 'flvSantos/ignite-feed' },
    ],
    publishedAt: new Date('2022-08-13 08:07:04')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandez',
      role: 'CEO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Faaala Dev!! 👋' },
      { type: 'paragraph', content: 'Vamos de mais uma NLW com muito conteúdo e muita mão na massa!' },
      { type: 'link', content: 'flvSantos/ignite-feed' },
    ],
    publishedAt: new Date('2022-08-25 13:07:04')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
