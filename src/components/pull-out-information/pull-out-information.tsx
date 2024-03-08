import { FC, useState } from 'react'
import styles from './pull-out-information.module.scss'
import SvgShieldBorder from '@images/pull-out-information/shield.svg'
import SvgShieldBackground from '@images/pull-out-information/shield2.svg'
import SvgHand from '@images/pull-out-information/click-arm.svg'

interface IPullOutInformation {
  children: JSX.Element
  SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>
  ShieldText: JSX.Element
}

const PullOutInformation: FC<IPullOutInformation> = ({
  children,
  SvgIcon,
  ShieldText,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    console.log('hello')
    setIsOpen(!isOpen)
  }

  return (
    <article
      className={`${styles.container} ${isOpen && styles.container_open}`}
    >
      <div className={`${styles.svg_wrapper}`}>
        <SvgIcon className={styles.svg} />
        <div className={styles.shield_wrapper}>
          <div className={styles.shield_wrapper_text}>{ShieldText}</div>
          <SvgShieldBorder
            className={`${styles.shield} ${styles.shield_border}`}
          />
          <SvgShieldBackground
            className={`${styles.shield} ${styles.shield_background}`}
          />
        </div>
      </div>
      <div
        className={`${styles.info_container} ${!isOpen && styles.info_container_hidden}`}
      >
        {children}
        <div
          className={`${styles.info_overflow} ${isOpen && styles.info_overflow_hidden}`}
        ></div>
      </div>
      <button onClick={handleClick} className={styles.button}>
        <SvgHand className={styles.button_svg} />
      </button>
    </article>
  )
}

export default PullOutInformation
