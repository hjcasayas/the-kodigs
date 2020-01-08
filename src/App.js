import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { MainNav } from './components/main-nav';
import { Counter } from './pages/counter';
import { TodoPage } from './pages/todo';
import { Home } from './pages/home';

import './App.scss';

class App extends PureComponent {
  render() {
    const { Header, Content } = Layout;
    return (
      <div className='App'>
        <Router>
          <Layout>
            <Header>
              <MainNav />
            </Header>
            <Content>
              <Switch>
                <Route path='/counter'>
                  <Counter />
                </Route>
                <Route path='/todo'>
                  <TodoPage />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
