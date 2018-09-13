import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Recipe from './components/Recipe';
import CreateProfile from './components/CreateProfile';


ReactDOM.render(    <Provider store={store}>
                     <Router>
                       <div>
                      <CreateProfile/>
                       <Switch>
                         <Route exact path='/' component={Layout} />
                         <Route path='/recipe/:id' component={Recipe}/>
                       </Switch>
                       </div>
                      </Router>
                     </Provider>, document.getElementById('root'));
