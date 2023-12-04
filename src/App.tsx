import "./global.css"
import styles from './App.module.css'

import { Header } from './components/Header'

import { PlusCircle } from '@phosphor-icons/react'
import { FormEvent } from "react"
import { ToDoList } from "./components/ToDoList"


export function App() {

  function handleNewItemOnToDoList(event: FormEvent) {
    event.preventDefault()
  }
  
  return (
    <div>
      <Header />
      
      <div
        className={styles.container}
      >
        <div
          className={styles.wrapper}
        >

          <form
            onSubmit={handleNewItemOnToDoList}
          >
            <div 
              className={styles['input-wrapper']}
            >
              <input
                type="text" 
                placeholder='Adicione uma nova tarefa'
              />

              <button>
                Criar

                <PlusCircle 
                  size={20}
                />
              </button>
            </div>
          </form>
        </div>

      </div>
        <ToDoList />
    </div>
    
  )
}

export default App
