import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import * as reducers from './reducers'
import { RootContainer } from './containers'

const history = createHistory()
const routerMW = routerMiddleware(history)
const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), applyMiddleware(thunk, routerMW))

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
      <HashRouter>
        <Fragment>
          <Redirect from='/' to='/coupons' />
          <Route path={'/'} component={RootContainer} />
        </Fragment>
      </HashRouter>
  </ConnectedRouter>
</Provider>,
document.getElementById('app'))
