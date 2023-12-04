import styles from './ToDoList.module.css'
import clipboard from '../assets/Clipboard.svg'
import { ToDoItem } from './ToDoItem'

export function ToDoList() {
  return(
    <>
      <div
        className={styles.content}
      >
        <div
          className={styles['content-header']}
        >
          <p>
            Tarefas Criadas
            <span>0</span>
          </p>

          <p>
            Concluídas 
            <span>0</span>
          </p>
        </div>

        <div
          className={styles['todo-section']}
        >
          {/* <div
            className={styles['empty-list']}
          >
            <img
              src={clipboard}
            />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div> */}

          <div
            className={styles.list}
          >
              <ToDoItem />
              <ToDoItem />
            
          </div>
        </div>
      </div>
    </>
  )
}