import styles from './avatar.module.css'

export function Avatar({ src, alt, hasBorder = true }) {
  console.log({ src })
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
      alt={alt}
    />
  )
}