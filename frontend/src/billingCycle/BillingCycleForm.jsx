import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
class BillingCycleForm extends Component {

    render (){
        const { handleSubmit } = this.props
        console.log(handleSubmit)
        return (
            <form role='form' onSubmit={handleSubmit}>
            <div className="box-body">

<field name='name' component='input'/>
<field name='moonth' component='input'/>
<field name='year' component='input'/>

             </div>
                   <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                  </div>
            </form>
        )
    }
    
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)