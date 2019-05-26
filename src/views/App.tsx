import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';
import { Home } from './home';
import { GitHubLogo } from 'components/github';
import { SelectMapper } from './select-mapper';
import { ReactiveEditor } from './reactive-editor';

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
        <main className={styles.main}>
          <Route path="/" exact component={Home} />
          <Route path="/select-mapper/:text" component={SelectMapper} />
          <Route path="/reactive/:symbol/:text" component={ReactiveEditor} />
        </main>
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
