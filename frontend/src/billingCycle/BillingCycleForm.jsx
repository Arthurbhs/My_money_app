import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import LabelAndinput from '../common/form/LabelAndinput'


import { init } from './BillingCyclesActions'


class BillingCycleForm extends Component {

    render (){
        const { handleSubmit } = this.props
        console.log(handleSubmit)
        return (
            <form role='form' onSubmit={handleSubmit}>
            <div className="box-body">

<field name='name' component = {LabelAndinput} 
label='Nome' cols='12 4' placeholder=' informe o nome'
/>
<field name='moonth' component = {LabelAndinput} type='number'
label='Mês' cols='12 4' placeholder=' Informe o mês'
/>
<field name='year' component = {LabelAndinput}  type='number'
label='Ano' cols='12 4' placeholder=' Informe o ano'
/>

             </div>
                   <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                     <button type="button" className="btn btn-default"
                     onClick={this.props.init}>Cancelar</button>   
                  </div>
            </form>
        )
    }
    
}



BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch =>  bindActionCreators({init}, dispatch)
export default  connect(null, mapDispatchToProps)(BillingCycleForm)