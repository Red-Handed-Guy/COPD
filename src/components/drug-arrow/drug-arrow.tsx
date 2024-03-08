import styles from './drug-arrow.module.scss'

const DrugArrow = () => {
  return (
    <div className={styles.arrow}>
      <svg
        className={styles.arrow_svg}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
      >
        <path
          d="M13 21L0.00961862 0.749999L25.9904 0.750002L13 21Z"
          fill="#01457A"
        />
      </svg>
    </div>
  )
}

export default DrugArrow
