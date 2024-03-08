import { FC } from 'react'
import styles from './title_h2.module.scss'
import Decor from '../../images/title_h2/Vector_48.svg'

interface ITitleH2 {
  text: string
}

const TitleH2: FC<ITitleH2> = ({ text }) => {
  return (
    <div className={styles.title_wrapper}>
      <h2 className={styles.title}>{text}</h2>
      <Decor className={styles.title_decor} />
    </div>
  )
}

export default TitleH2
