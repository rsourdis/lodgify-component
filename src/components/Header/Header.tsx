import { Group } from '@/types/task.interface'
import { useMemo } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './header.module.css'

type Props = {
  groupedTasks: Group[]
}

const Header = ({ groupedTasks }: Props) => {
  const progress = useMemo(() => {
    const taskTotalValue = groupedTasks.reduce((acc, group) => {
      const groupTasksTotalValue = group.tasks.reduce((total, task) => total + task.value, 0)
      return acc + groupTasksTotalValue
    }, 0)

    const progressTotal = groupedTasks.reduce((acc, group) => {
      const groupTasksTotalValue = group.tasks.reduce((total, task) => {
        if (task.checked) return total + task.value * (100 / taskTotalValue)
        return total
      }, 0)
      return acc + groupTasksTotalValue
    }, 0)

    return progressTotal
  }, [groupedTasks])

  return (
    <div className={styles.header_container}>
      <h1 className={styles.header_title}>Lodgify Grouped Tasks</h1>
      <ProgressBar progress={progress} />
    </div>
  )
}

export default Header
