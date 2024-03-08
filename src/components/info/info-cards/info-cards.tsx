import React from 'react'
import styles from './info-cards.module.scss'
import generalStyles from '../info.module.scss'
import { Card } from './card/card'
import { mockInfoCards } from '@/src/mock-data/info-cards'

const InfoCards = () => {
  const text = (
    <>
      <p className={generalStyles.info_common_text}>
        <span>
          Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
          одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
          77% пациентов.<sup>1</sup>
        </span>
      </p>
      <p className={generalStyles.info_common_text}>
        В течение 5 лет после первого тяжёлого обострения в живых остаются
        только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с
        таковым при сердечной недостаточности, инфаркте миокарда и некоторых
        злокачественных опухолях.
      </p>
    </>
  )

  return (
    <div className={`info ${generalStyles.info}`}>
      <div className={`info_text ${generalStyles.info_text_container}`}>
        {text}
      </div>
      <div
        className={`${generalStyles.info_text_container} ${generalStyles.info_text_container_open}`}
      >
        {text}
      </div>
      <h3 className={styles.info_title}>Пятилетняя выживаемость пациентов</h3>
      <div className={styles.info_cards}>
        {mockInfoCards.map(card => (
          <Card key={card.text_slim} data={card}>
            {card.text_normal_jsx}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default InfoCards
