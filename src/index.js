import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { history } from './store/configureStore'
import store from './store/configureStore'
import Admin from './layouts/Admin'
import './assets/sass/style.scss';

import $ from 'jquery';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Admin} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

$(document).ready(function(){
    $('.menu .menu-item').click(function() {
        $('.menu .menu-item').removeClass('active');
        $(this).addClass('active');
    })
});