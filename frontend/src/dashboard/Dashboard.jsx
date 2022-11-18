
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Row from '../common/layout/Row'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/ValueBox'
import {bindActionCreator} from 'redux'
import {getSummary} from './DashboardActions'


class Dashboard extends Component{

componentWillMount(){
    this.props.getSummary()
}

render() {
    const {credit, debt} = this.props.summary 
    return(
        <div>
            <ContentHeader title='Dashboars' small='Versão 1.0'/>
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
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreator({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)





