import {combineReducers} from 'redux'
import BillingCyclesReducer from '../billingCycle/BillingCyclesReducer'
import TabReducer from '../common/tab/TabReducer'
import DashboardReducers from '../dashboard/DashboardReducers'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
  import authReducer from '../auth/authReducer'



const roootReducer = combineReducers({

dashboard: DashboardReducers,
tab: TabReducer,
billingCycle: BillingCyclesReducer,
from: formReducer,
toastr: toastrReducer,
auth: authReducer,

})

export default roootReducer