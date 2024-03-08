import DragCard from '../drag-card/drag-card'
import styles from './drag-adaptive-scheme.module.scss'
import DragCardNoImg from '../drag-card-no-img/drag-card-no-img'
import { FC } from 'react'
import { IDrugCard } from '@/src/types'
import SvgArrow from '@images/arrow.svg'

interface IDragAdaptiveScheme {
  firstItem: Required<IDrugCard>
  secondItem: Required<IDrugCard>
  resultItem: IDrugCard
}

const DragAdaptiveScheme: FC<IDragAdaptiveScheme> = ({
  firstItem,
  secondItem,
  resultItem,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards_wrapper}>
        <DragCard data={firstItem} />
        <DragCard data={secondItem} />
        <SvgArrow className={styles.arrow_svg} />
      </div>
      <DragCardNoImg data={resultItem} />
    </div>
  )
}

export default DragAdaptiveScheme
