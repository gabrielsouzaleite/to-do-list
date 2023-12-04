import { Trash} from '@phosphor-icons/react'
import styles from './ToDoItem.module.css'

export function ToDoItem() {
  return (
    <div
      className={styles.item}
    >
      <p>circle</p>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash 
        size={20}
      />
    </div>
  )
}