
import React, { Component } from 'react'
import Row from '../common/layout/Row'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/ValueBox'
import axios from 'axios'

const BASE_URL = 'http://localhost: 3003/api'


export default class DashboardTwo extends Component{
constructor(props){
super(props)
this.state = {credit: 0, debt: 0}

}



componentWillMount(){
    axios.get(`${BASE_URL}/billingCycles/summary`)
    .then(resp => this.setState(resp.data))
}

render() {
    const {credit, debt} = this.state
    return(
        <div>
            <ContentHeader title='Dashboars' small='Versão 2.0'/>
            <Content>
                <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
            value={`R$ ${credit}`} text='total de crédtos'/> 

            <ValueBox cols='12 4' color='red' icon='credit-card'
            value={`R$ ${debt}`}  text='total de débitos'/> 

            <ValueBox cols='12 4' color='blue' icon='money'
            value={`R$ ${credit - debt}`}  text='total de consolidad'/> 
            </Row>
            </Content>
        </div>
    )
}

}




