import React from 'react'
import reactDOM from 'react-dom'
import App from './main/app'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import  Reducers  from './main/Reducers'


const store = createStore(Reducers)
reactDOM.render(
    <Provider store={store}>
<App/>, 
</Provider>,
document.getElementById('app'))