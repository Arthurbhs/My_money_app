import React from 'react'
import reactDOM from 'react-dom'
import App from './main/app'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import  Reducers  from './main/Reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window._REDUX_DDEVTOOLS_EXTENSION__
&& window__REDUX_DEVTOOLS_EXTENSION__()


const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)
reactDOM.render(
    <Provider store={store}>
<App/>, 
</Provider>,
document.getElementById('app'))