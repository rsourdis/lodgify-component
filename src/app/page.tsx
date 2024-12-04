import GroupedTask from '@/components/GroupedTask/GroupedTask'
import { GroupsResponse } from '@/types/task.interface'
import axios from 'axios'
import styles from './page.module.css'

export default async function Home() {
  const taskGroups = await axios
    .get<GroupsResponse>('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress')
    .then((res) => res.data)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GroupedTask groups={taskGroups} />
      </main>
    </div>
  )
}
