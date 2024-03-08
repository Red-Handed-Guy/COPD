'use client'

import styles from './page.module.scss'
import TitleH2 from '../components/title/title_h2'
import PullOutInformation from '../components/pull-out-information/pull-out-information'
import InfoChart from '../components/info/info-chart/info-chart'
import InfoCards from '../components/info/info-cards/info-cards'
import GlistSvg from '@images/pull-out-information/glist.svg'
import HumanSvg from '@images/pull-out-information/human.svg'
import ImportantText from '../components/important-text/important-text'
import DragDefaultScheme from '../components/drag-default-scheme/drag-default-scheme'
import DragAdaptiveScheme from '../components/drag-adaptive-scheme/drag-adaptive-scheme'
import {
  mockDrugCardsNoImg,
  mockDrugCardsWithImg,
} from '../mock-data/drug-cards'

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <TitleH2 text="ХОБЛ: мифы и реальность" />
        <div className={styles.section__content_wrapper}>
          <PullOutInformation
            SvgIcon={HumanSvg}
            ShieldText={
              <p>
                ХОБЛ <span>болеют преимущественно мужчины?</span>
              </p>
            }
          >
            <InfoChart />
          </PullOutInformation>
          <PullOutInformation
            SvgIcon={GlistSvg}
            ShieldText={
              <p>
                <span>Опасно</span> не наличие заболевания, а обострения?
              </p>
            }
          >
            <InfoCards />
          </PullOutInformation>
        </div>
      </section>
      <section className={styles.section}>
        <TitleH2 text="Терапия ХОБЛ: что в фокусе?" />
        <div className={styles.section__content_wrapper}>
          <ImportantText text="Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии" />
          <p className={styles.section__text}>
            Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
            <sup>1</sup>:
          </p>
          <DragDefaultScheme />

          <DragAdaptiveScheme
            firstItem={mockDrugCardsWithImg[0]}
            secondItem={mockDrugCardsWithImg[1]}
            resultItem={mockDrugCardsNoImg[0]}
          />
          <DragAdaptiveScheme
            firstItem={mockDrugCardsWithImg[1]}
            secondItem={mockDrugCardsWithImg[2]}
            resultItem={mockDrugCardsNoImg[1]}
          />
        </div>
      </section>
    </main>
  )
}
