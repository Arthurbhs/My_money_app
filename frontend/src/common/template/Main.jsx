import React from 'react'
import MainItem from './MainItem'
import MaiTree from './MaiTree'

export default props => (
    <ul className="sidebar-menu">
        <MainItem path="#/" label='Dashboard' icon='dashboard'/>
        <MaiTree label='Cadastro'  icon='edit'>
        <MainItem path='#billingCycles'
        label='Ciclos de pagamento' icon='usd' />

</MaiTree>
    </ul>
)