import React, {Component} from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
class BillingCycle extends Component{
render(){
    return(
        <div>
            <ContentHeader title='Circulos de pagamento' small='Cadastro' />
            <Content>
                Ciclos de pagamento
            </Content>
        </div>
    )
  }
}
export default BillingCycle 