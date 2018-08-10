
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import "semantic-ui-css/semantic.css";

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FixedMenuLayout from './layouts/fixed_menu_layout';
import SignUpLayout from './layouts/sign_up_layout';
import './assets/app/css/custom.css';

import SignUp from './containers/auth/sign-up';
import Login from './containers/auth/index';
import Subdomain from './containers/auth/set-subdomain';
import MainChat from './containers/main-chat/main-chat';
import Admin from './containers/admin/index';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(reducers)

const SUBDOMAIN = localStorage.getItem('subdomain')


if(SUBDOMAIN){
  axios.defaults.headers.common['Subdomain'] = SUBDOMAIN;
}

const LayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <FixedMenuLayout>
            <Component {...matchProps} />
        </FixedMenuLayout>
      )} />
    )
};
const SignUpRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <SignUpLayout>
            <Component {...matchProps} />
        </SignUpLayout>
      )} />
    )
};
ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/chat" component={MainChat}/>
                <SignUpRoute path="/sign-up" component={SignUp}/> 
                <LayoutRoute path="/subdomain" component={Subdomain}/> 
                <Route path="/login" component={Login}/>
                <LayoutRoute path="/" component={App}/> 
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();