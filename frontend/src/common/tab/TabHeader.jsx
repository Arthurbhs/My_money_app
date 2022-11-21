import React, { Componet } from 'react'
import { connect } from 'react-redux'
import   { bindActionCreators } from 'redux'
import If from '../operator/If'
import {selectTab} from  './TabsAction'

class TabHeader extends Component {
render() {
    const selected = this.props.tab.selected === this.props.target
     const visible = this.porps.tab.visible[this.props.target]
return (
<If test={visible}>

    <li className={selected ? 'active' : ''}>
        <a href='javascript:;'
        data-toggle='tab'
        onClick={() => this.props.selectTab(this.props.target)}
        data-target={this.props.target}>
            <i className={`fa fa-${this.props.incon}`}></i> {this.props.label}
        </a>
    </li>
    </If>
     )

  }

}
const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({selectTab},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)