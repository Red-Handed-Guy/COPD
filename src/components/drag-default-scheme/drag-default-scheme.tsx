import React from 'react'
import styles from './drag-default-scheme.module.scss'
import DragCard from '../drag-card/drag-card'
import {
  mockDrugCardsNoImg,
  mockDrugCardsWithImg,
} from '@/src/mock-data/drug-cards'
import DrugArrow from '../drug-arrow/drug-arrow'
import DragCardNoImg from '../drag-card-no-img/drag-card-no-img'

const DragDefaultScheme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.drug_cards_wrapper}>
        <DragCard data={mockDrugCardsWithImg[0]} />
        <DragCard data={mockDrugCardsWithImg[1]} />
        <DragCard data={mockDrugCardsWithImg[2]} />
      </div>
      <div
        className={`${styles.drug_cards_wrapper} ${styles.drug_cards_arrows_wrapper_margin}`}
      >
        <div className={styles.drug_cards_arrows_empty}></div>
        <DrugArrow />
        <DrugArrow />
        <div className={styles.drug_cards_arrows_empty}></div>
      </div>
      <div className={styles.drug_cards_wrapper}>
        <DragCardNoImg data={mockDrugCardsNoImg[0]} />
        <DragCardNoImg data={mockDrugCardsNoImg[1]} />
      </div>
    </div>
  )
}

export default DragDefaultScheme
