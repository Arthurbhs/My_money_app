import React, {Component} from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import Tabseader from '../common/tab/Tabseader'
import TabsContent from '../common/tab/TabsContent'
class BillingCycle extends Component{
render(){
    return(
        <div>
            <ContentHeader title='Circulos de pagamento' small='Cadastro' />
            <Content>
              <Tabs>
<Tabseader>

</Tabseader>
<TabsContent>

    
</TabsContent>

              </Tabs>
            </Content>
        </div>
    )
  }
}
export default BillingCycle 