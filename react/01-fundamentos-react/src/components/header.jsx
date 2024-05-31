import igniteLogo from '../assets/ignite-logo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}