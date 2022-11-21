import React, {Component} from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
class BillingCycle extends Component{
render(){
    return(
        <div>
            <ContentHeader title='Circulos de pagamento' small='Cadastro' />
            <Content>
              <Tabs>
<TabsHeader>
<TabHeader label='Listar' icon='bars' target='tabList'/>
<TabHeader label='incluir' icon='plus' target='tabCreate'/>
<TabHeader label='alterar' icon='pencil' target='tabUpdade'/>
<TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
</TabsHeader>
<TabContent id='tabList'><h1>Lista</h1></TabContent>
<TabContent id='tabCreate'><h1>incluir</h1></TabContent>
<TabContent id='tabUpdate'><h1>alterar</h1></TabContent>
<TabContent id='tabDelete'><h1>excluir</h1></TabContent>
<TabsContent>

    
</TabsContent>

              </Tabs>
            </Content>
        </div>
    )
  }
}
export default BillingCycle 