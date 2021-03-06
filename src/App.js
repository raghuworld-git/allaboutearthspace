
import React from 'react';
import AppRoute from './router/AppRoute';
import Header from './components/shared/header/Header';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <AppRoute>
        <div className={styles.headerMargin}>
          <Header />
        </div>
      </AppRoute>
    </>
  );
}

export default App;
