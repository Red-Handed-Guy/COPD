import { FC } from 'react'
import styles from './card.module.scss'
import { ICard } from '@/src/types'

interface ICardComponent {
  data: ICard
  children: JSX.Element
}

export const Card: FC<ICardComponent> = ({ data, children }) => {
  const { Svg, text_percent, text_slim } = data

  return (
    <article className={styles.card}>
      <Svg className={styles.svg} />
      <p className={styles.text_percent}>{text_percent}</p>
      <p className={styles.text_normal}>{children}</p>
      <p className={styles.text_slim}>{text_slim}</p>
    </article>
  )
}
