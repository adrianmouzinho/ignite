import style from './header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}