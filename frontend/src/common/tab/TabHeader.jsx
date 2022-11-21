import React from 'react'
import { connect } from 'react-redux'

class TabHeader extends Component {
render() {
    const selected = this.props.tab.selected === this.props.target
return (


    <li className={selected ? 'active' : ''}>
        <a href='javascript:;'
        data-toggle='tab'
        onClick={() => this.props.selectTab(this.props.target)}
        data-target={this.props.target}>
            <i className={`fa fa-${this.props.incon}`}></i> {this.props.label}
        </a>
    </li>
     )

  }

}
const mapstateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({selectTab},dispatch)
export default connect(mapStateTooProps, mapDispatchToProps)(TabHeader)