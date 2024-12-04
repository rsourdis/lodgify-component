'use client'

import { Group } from '@/types/task.interface'
import { useState } from 'react'
import styles from './task.module.css'
import TaskCheck from './TaskCheck'

type Props = {
  groupIndex: number
  taskIndex: number
  description: string
  checked: boolean
  setgroupedTasks: (cb: (prev: Group[]) => Group[]) => void
}

const Task = ({ groupIndex, taskIndex, description, checked, setgroupedTasks }: Props) => {
  const [isChecked, setisChecked] = useState(checked)

  const handleCheckboxChange = () => {
    setisChecked(!isChecked)
    setgroupedTasks((prev) => {
      prev[groupIndex].tasks[taskIndex].checked = !isChecked
      return [...prev]
    })
  }

  return (
    <div className={styles.task_container}>
      <label className={styles.task_checkbox_container}>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
        <span className={`${styles.task_custom_checkbox} ${isChecked ? 'true' : ''}`} aria-hidden='true'>
          {isChecked && <TaskCheck />}
        </span>
      </label>
      <label className={styles.task_label}>{description}</label>
    </div>
  )
}

export default Task
