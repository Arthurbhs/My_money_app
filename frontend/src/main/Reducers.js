import {combineReducers} from 'redux'

const roootReducer = combineReducers({

dashboard: () => ({summary: {credit: 100, debt: 50}})

})

export default roootReducer