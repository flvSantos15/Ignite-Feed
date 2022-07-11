import { Header } from "./components/Header"
import { Post } from './Post'

import styles from '../src/App.module.css'
import '../src/global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post title={'Ignite Feed project 1'} />
        </main>
      </div>
    </>
  )
}
