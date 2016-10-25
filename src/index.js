import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers/index'
import App from './containers/App'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

let store = createStore(todoApp)
/**
 * Provider is a component provided to us by the 'react-redux' bindings that
 * wraps our app - thus making the Redux store/state available to our 'connect()'
 * calls in component hierarchy below.
 */
const Main = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
)

render(
  <Main/>, document.getElementById('root'))
