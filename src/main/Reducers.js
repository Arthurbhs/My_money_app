import {combineReducers} from 'redux'
import BillingCyclesReducer from '../billingCycle/BillingCyclesReducer'
import TabReducer from '../common/tab/TabReducer'
import DashboardReducers from '../dashboard/DashboardReducers'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
  



const roootReducer = combineReducers({

dashboard: DashboardReducers,
tab: TabReducer,
billingCycle: BillingCyclesReducer,
from: formReducer,
toastr: toastrReducer

})

export default roootReducer