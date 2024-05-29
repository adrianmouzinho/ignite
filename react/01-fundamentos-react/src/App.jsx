import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import styles from './app.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>oi</main>
      </div>
    </div>
  )
}
