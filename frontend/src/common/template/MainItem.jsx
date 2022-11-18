import react from 'react'

export default props => (
    <li>
        <a href={`fa ${props.icon}`}>
            <i>
                {props.label}
            </i>
        </a>
    </li>
)