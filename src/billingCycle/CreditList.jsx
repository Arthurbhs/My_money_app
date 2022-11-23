import React, { Component } from 'reac'
import Grid from '../common/layout/Grid.'
import  {Field} from  'redux-form'
import Input from '../common/form/Input'



class CreditList extends Component {

         renderRows(){
            const list = ths.props.list || []
            return list.map((item, index) => (
                <tr key={index}>
                <td><Field name={`credits[${index}].name`} componnent={Input} 
                placeolder= 'Informe o valor' readOnly={this.props.readOnly} /></td>
               <td> <Field name={`credits[${index}].value`} componnent={Input} 
               placeolder= 'Informe o valor' readOnly={this.props.readOnly} /></td>
               <td></td>

              </tr>

            ))
             
              
       
             
        
         }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>
                        Créditos
                    </legend>
                    <table classNamme='table'>

                     <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Açoes</th>
                        </tr>
                     </thead> 
                   <tbody>
                    {this.renderRows()}
                   </tbody>
                    </table>
                </fieldset>

            </Grid>
        )
    }
}