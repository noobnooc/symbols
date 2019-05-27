import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from 'assets/logo.svg';
import { GitHubLogo } from 'components/github';

import styles from './App.module.css';
import { Home } from './home';
import { SelectMapper } from './select-mapper';
import { ReactiveEditor } from './reactive-editor';
import { SelectDecorator } from './select-decorator';

const App: FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
          <Route
            path="/select-decorator/:symbolType/:text"
            component={SelectDecorator}
          />
          <Route
            path="/reactive/:symbolType/:decorator/:text"
            component={ReactiveEditor}
          />
        </main>
        <footer className={styles.footer}>
          <a
            href="https://www.hardo.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2019 🅗🅐🅡🅓🅞
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
