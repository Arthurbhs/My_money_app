import {combineReducers} from 'redux'
import TabReducer from '../common/tab/TabReducer'
import DashboardReducers from '../dashboard/DashboardReducers'



const roootReducer = combineReducers({

dashboard: DashboardReducers,
tab: TabReducer

})

export default roootReducer