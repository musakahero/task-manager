import styles from './App.module.css';
import { TaskManager } from './components/TaskManager/TaskManager';

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>

      </header>
      <main className={styles['App-main']}>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;
