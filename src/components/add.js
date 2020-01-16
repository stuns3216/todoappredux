import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addItem} from '../redux/actions/index'

 class Add extends Component {
     state={item:''}
     handleChange=(e)=>{
         this.setState({item:e.target.value})

     }
     handleItem=()=>{
        this.setState({item:''})

     }
    render() {
        return (
            <div>
                <input value={this.state.item} onChange={this.handleChange}/>
                <button onClick={()=>{this.props.addItem(this.state.item);this.handleItem()}}>Add</button>
            </div>
        )
    }
}
//  au lieu de mapDispatch To Props
// we can add actions used distructuring
export default connect(null,{addItem})( Add)
