import React from 'react';
import styles from './App.module.scss';
import Todo from "../Todo/Todo";

const App = () => {
  return (
    <>
      <h1 className='visually-hidden'>Список задач</h1>
      <div className={styles.App}>
        <Todo/>
      </div>
    </>
  );
}

export default App;
