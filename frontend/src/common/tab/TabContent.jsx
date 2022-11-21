import Reaact, { Component } from 'react'
import { bindActionCreators }  from 'redux'
import { connect } from 'react-redux'
import If from '../operator/If'

class TabContent extends Component {

 render() {
    const visible = this.porps.tab.visible[this.props.id]
    const selected = this.props.tab.selected === this.props.target
    return(
        <If test={visible}>
        <div id={this.props.id}
        className={`tab-pane ${selected ? 'active' : ''}`}>
{this.props.children}
        </div>
        </If>
    )
 }

}

const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps)(TabContent)