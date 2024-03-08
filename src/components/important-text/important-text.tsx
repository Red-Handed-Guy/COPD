import { FC } from 'react'
import styles from './important-text.module.scss'

const ImportantText: FC<{ text: string }> = ({ text }) => {
  return <p className={styles.text}>{text}</p>
}

export default ImportantText
