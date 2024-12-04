'use client'

import Header from '@/components/Header/Header'
import TaskGroup from '@/components/TaskGroup/TaskGroup'
import { Group } from '@/types/task.interface'
import { useState } from 'react'
import styles from './groupedTask.module.css'

type Props = {
  groups: Group[]
}

const GroupedTask = ({ groups }: Props) => {
  const [groupedTasks, setgroupedTasks] = useState<Group[]>(groups)
  const [expandedGroup, setexpandedGroup] = useState('')
  return (
    <div>
      <Header groupedTasks={groupedTasks} />
      <div className={styles.groups_container}>
        {groupedTasks.map((group, index) => (
          <TaskGroup
            group={group}
            key={`group-${index}`}
            setgroupedTasks={setgroupedTasks}
            groupIndex={index}
            isExpanded={expandedGroup === index.toString()}
            setexpandedGroup={setexpandedGroup}
          />
        ))}
      </div>
    </div>
  )
}

export default GroupedTask
