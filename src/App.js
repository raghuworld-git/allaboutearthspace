
import React from 'react';
import AppRoute from './router/AppRoute';
import Header from './components/shared/header/Header';
import styles from './App.module.css';
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <ScrollToTop smooth color="#1266F1" />
      <AppRoute>
        <div className={styles.headerMargin}>
          <Header />
        </div>
      </AppRoute>
    </>
  );
}

export default App;
