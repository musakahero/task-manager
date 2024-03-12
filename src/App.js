import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { TaskManager } from './components/TaskManager/TaskManager';

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>

      </header>
      <main className={styles['App-main']}>
        {/* ROUTING */}
        <Routes>
          <Route path="/" element={<TaskManager />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
