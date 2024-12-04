import styles from './progressBar.module.css'

type Props = {
  progress: number
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={styles.progress_container}>
      <div className={styles.progress_bar} style={{ width: `${progress}%` }}>
        {progress > 0 && <p className={styles.progress_label}>{progress.toFixed(0)}%</p>}
      </div>
    </div>
  )
}

export default ProgressBar
