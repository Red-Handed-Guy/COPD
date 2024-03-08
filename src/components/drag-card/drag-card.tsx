import { FC } from 'react'
import styles from './drag-card.module.scss'
import SvgInhaler from '@images/drug-cards/inhaler.svg'
import { IDrugCard } from '@/src/types'

interface IDragCardComponent {
  data: IDrugCard
}

const DragCard: FC<IDragCardComponent> = ({ data }) => {
  const { title, text, number } = data
  return (
    <article className={styles.card}>
      {number && (
        <div className={styles.card_svg_wrapper}>
          <SvgInhaler className={styles.card_svg_inhaler} />
          <div className={styles.card_svg_ellipse}>
            <p className={styles.card_svg_ellipse_number}>{number}</p>
          </div>
        </div>
      )}
      {title && <h4 className={styles.card_title}>{title}</h4>}
      <p className={styles.card_text}>{text}</p>
    </article>
  )
}

export default DragCard
