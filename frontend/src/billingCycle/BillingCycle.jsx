import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import List from './BillingCyclesList'
import { create, update, remove } from './BillingCyclesActions'


class BillingCycle extends Component{

compenentHillMount() {
  this.props.init()
}


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

<TabsContent>
<TabContent id='tabList'>
  <List/>
</TabContent>
<TabContent id='tabCreate'> <form onSubmit={this.props.create}
submitLabel='incluir' submmitClass='primary' />
 </TabContent>
<TabContent id='tabUpdate'> <form onSubmit={this.props.update}
submitLabel='alterar' submmitClass='info'/> </TabContent>
<TabContent id='tabDelete'><form onSubmit={this.props.remove} readOnly={true}
submitLabel='Excluir' submmitClass='danger'/></TabContent>
    
</TabsContent>

              </Tabs>
            </Content>
        </div>
    )
  }
}
const DispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, DispatchToProps)(BillingCycle)