
import React, { Component } from 'react'
import Row from '../common/layout/Row'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/ValueBox'

class Dashboard extends Component{
render() {
    return(
        <div>
            <ContentHeader title='Dashboars' small='Versão 1.0'/>
            <Content>
                <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
            value='R$ 10' text='total de crédtos'/> 

            <ValueBox cols='12 4' color='red' icon='credit-card'
            value='R$ 10' text='total de débitos'/> 

            <ValueBox cols='12 4' color='blue' icon='money'
            value='R$ 0' text='total de consolidad'/> 
            </Row>
            </Content>
        </div>
    )
}

}

export default Dashboard




