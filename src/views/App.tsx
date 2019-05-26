import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';
import { Home } from './home/Home';
import { GitHubLogo } from 'components/github';

const App: FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <a
            className={styles.onGitHub}
            href="https://github.com/hardo/symbols"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubLogo className={styles.gitHubLogo} />
            Source On GitHub
          </a>
        </header>
        <Route path="/" exact component={Home} />
        <footer className={styles.footer}>
          <a
            href="https://www.hardo.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2019 Hardo
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
