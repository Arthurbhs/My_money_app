import React from 'react'
import reactDOM from 'react-dom'
import App from './main/app'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import  Reducers  from './main/Reducers'
import promise from 'redux-promise'


const store = applyMiddleware(promise)(createStore)(Reducers)
reactDOM.render(
    <Provider store={store}>
<App/>, 
</Provider>,
document.getElementById('app'))