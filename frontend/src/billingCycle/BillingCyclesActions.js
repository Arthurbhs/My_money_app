import  axios from  'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab} from '../common/tab/TabsAction'

const  BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/BillingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}


export function remove(values){
return submit(values, 'delete')
}

export function create(values) {
    return submit(values, 'post')
    
}

export function update(values) {
    return submit(values, 'put')

}

export function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '' 
        axios[method](`${BASE_URL}/BiillingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        } )
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
    
}



export function showUpdate(billingCycle) {
return[

    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
   
    initialize('BillingCyclesForm', billingCycle)
]


}

export function init() {
return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('BillingCyclesForm', INITIAL_VALUES)
  ]

}

export function showDelete(billingCycle) {
    return[
    
    
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('BillingCyclesForm', billingCycle)
    ]
    
    
    }