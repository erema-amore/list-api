import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@material-ui/core';
import { Home, Add } from '@material-ui/icons';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Task Manager
            </Typography>
            <Button component={Link} to="/" color="inherit">
              <Home />
              Home
            </Button>
            <Button component={Link} to="/add" color="inherit">
              <Add />
              Add Task
            </Button>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '20px' }}>
          <Switch>
            <Route path="/add">
              <AddTask />
            </Route>
            <Route path="/">
              <TaskList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
