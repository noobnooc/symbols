import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.module.css';
import { Home } from './home/Home';

const App: FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
