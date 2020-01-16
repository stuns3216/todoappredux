import React, { Component } from "react";
import { connect } from "react-redux";
import { deleateitem, editItem } from "../redux/actions/index";

class List extends Component {

  state = { item: this.props,
  editstart:this.props.list.map(el=>false),
newitems:'' };


  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handeledit=(i)=>{
    {this.setState({editstart:this.state.editstart.map((el2,z)=>i===z?el2=!el2:el2)})}
  }
  
  render() {
    return (
      <div>
        {this.props.list.map((el, i) => (
          <div style={{display: "flex", alignItems: "baseline" }}>
            
            <input style={{type:'text'}} onChange={this.handleChange} value={el}/>
            <button  onClick={()=>this.handeledit(i)}>
              
              {
              this.state.editstart[i]?'save':'Edit'}
            </button>
            <button onClick={() => this.props.deleateitem(i)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { list: state.items };
};

export default connect(mapStateToProps, { deleateitem, editItem, })(List);
