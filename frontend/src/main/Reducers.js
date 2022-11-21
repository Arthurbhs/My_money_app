import {combineReducers} from 'redux'
import BillingCyclesReducer from '../billingCycle/BillingCyclesReducer'
import TabReducer from '../common/tab/TabReducer'
import DashboardReducers from '../dashboard/DashboardReducers'




const roootReducer = combineReducers({

dashboard: DashboardReducers,
tab: TabReducer,
billingCycle: BillingCyclesReducer

})

export default roootReducer