'use client'

import Task from '@/components/Task/Task'
import { Group } from '@/types/task.interface'
import GroupArrowDown from './GroupArrowDown'
import GroupArrowUp from './GroupArrowUp'
import GroupIcon from './GroupIcon'
import styles from './taskGroup.module.css'

type Props = {
  group: Group
  groupIndex: number
  setgroupedTasks: (cb: (prev: Group[]) => Group[]) => void
  isExpanded: boolean
  setexpandedGroup: (newIndex: string) => void
}

const TaskGroup = ({ group, groupIndex, setgroupedTasks, isExpanded, setexpandedGroup }: Props) => {
  const handleShowGroupContent = () => {
    setexpandedGroup(isExpanded ? '' : groupIndex.toString())
  }

  const isGroupCompleted = group.tasks.every((task) => task.checked)

  return (
    <div className={styles.group_container}>
      <div className={styles.group_summary_container} onClick={handleShowGroupContent}>
        <div className={styles.group_title_container}>
          <GroupIcon isGroupCompleted={isGroupCompleted} />
          <label className={`${styles.group_title} ${isGroupCompleted ? styles.group_is_completed : ''}`}>{group.name}</label>
        </div>
        <div className={styles.group_button_container}>
          <span className={styles.group_button_label}>{isExpanded ? 'hide' : 'show'}</span>
          {isExpanded ? <GroupArrowUp /> : <GroupArrowDown />}
        </div>
      </div>
      {isExpanded && (
        <div className={styles.group_content_container}>
          {group.tasks.map((task, index) => (
            <Task key={`task-${index}`} description={task.description} checked={task.checked} groupIndex={groupIndex} taskIndex={index} setgroupedTasks={setgroupedTasks} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskGroup
