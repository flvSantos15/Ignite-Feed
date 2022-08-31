import styles from './Avatar.module.css'

interface IAvatar {
  hasBorder?: boolean
  src: string
  alt?: string
}

export function Avatar({ hasBorder = true, src, alt }: IAvatar) {
  return (
    <img
      className={!hasBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
      alt={alt}
    />
  )
}