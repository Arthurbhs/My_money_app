import React, {Component} from 'react'

export default class Grid extends Component {

toCssClasses(numbers) {

const cols = numbers ? numbers.split(' '): []
let classe = ' '

if (cols[0]) classe += `col-xs-${cols[0]}`
if (cols[1]) classe += `col-sm-${cols[1]}`
if (cols[2]) classe += `col-md-${cols[2]}`
if (cols[3]) classe += `col-lg-${cols[3]}`

return classe
}

render() {
    const gridClasse = this.toCssClasses(this.props.cols || '12')
    return (
        <div className={gridClasse}>
            {this.props.children}
        </div>

    )
}

}