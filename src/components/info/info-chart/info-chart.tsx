import React from 'react'
import styles from './info-chart.module.scss'
import generalStyles from '../info.module.scss'
import Image from 'next/image'
import ChartImage from '@images/chart-mock.png'

const InfoChart = () => {
  const text = (
    <>
      <p className={generalStyles.info_common_text}>
        В десятилетнем исследовании{' '}
        <span>«Генетическая эпидемиология ХОБЛ» (COPDGene)</span> среди
        пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено{' '}
        <span>преобладание женщин (66%)</span>, а в возрасте 60-64 лет
        количество женщин и мужчин.
      </p>
      <p className={generalStyles.info_common_text}>
        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
        связано с тем, что дыхательные пути курящих женщин имеют более{' '}
        <span>более высокий процент площади стенок</span>, но меньшую площадь
        просвета, внутренний диаметр и толщину дыхательных путей по сравнению с
        курящими мужчинами.
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
      <Image className={styles.info_chart_img} src={ChartImage} alt="График" />
    </div>
  )
}

export default InfoChart
