import styles from './Header.module.css'

import toDoLogo from "../assets/to-do-logo.svg"

export function Header() {
  return (
    <div 
      className={styles.header}
    >
      <img 
        src={toDoLogo}
        alt="Logo da aplicação escrito To-do" />
    </div>
  )
}