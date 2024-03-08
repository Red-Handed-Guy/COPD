import { FC } from 'react'
import styles from './drag-card-no-img.module.scss'

import { IDrugCard } from '@/src/types'

interface IDragCardComponent {
  data: IDrugCard
}

const DragCardNoImg: FC<IDragCardComponent> = ({ data }) => {
  const { text } = data
  return (
    <article className={styles.card}>
      <p className={styles.card_text}>{text}</p>
    </article>
  )
}

export default DragCardNoImg
