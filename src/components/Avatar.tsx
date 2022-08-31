import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...rest }: IAvatar) {
  return (
    <img
      className={!hasBorder ? styles.avatar : styles.avatarWithBorder}
      {...rest}
    />
  )
}