import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndinput from '../common/form/LabelAndinput'
import CreditList from './CreditList'


import { init } from './BillingCyclesActions'


class BillingCycleForm extends Component {

    render (){
        const { handleSubmit, readOnly, credits } = this.props
        console.log(handleSubmit)
        return (
            <form role='form' onSubmit={handleSubmit}>
            <div className="box-body">

<Field name='name' component = {LabelAndinput}  readOnly={readOnly}
label='Nome' cols='12 4' placeholder=' informe o nome'
/>
<Field name='moonth' component = {LabelAndinput} type='number' readOnly={readOnly}
label='Mês' cols='12 4' placeholder=' Informe o mês'
/>
<Field name='year' component = {LabelAndinput}  type='number' readOnly={readOnly}
label='Ano' cols='12 4' placeholder=' Informe o ano'
/>
<CreditList cols='12 6' list={credits} readOnly={readOnly}/>


             </div>
                   <div className="box-footer">
                    <button type='submit' className={`bnt bnt-${thhis.props.submitClass}`} >
                        {this.props.submitLabel}</button>
                     <button type="button" className="btn btn-default"
                     onClick={this.props.init}>Cancelar</button>   
                  </div>
            </form>
        )
    }
    
}



BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('BillingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const DispatchToProps = dispatch =>  bindActionCreators({init}, dispatch)
export default  connect(null, DispatchToProps)(BillingCycleForm)