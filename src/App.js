import React, {Component} from 'react';
import './App.css';
import RouterApp from './config/router';
import {connect} from 'react-redux';
import {set_data} from './store/action'


class App extends Component{
  render(){
    console.log('redux_data=>',this.props)
    return(
      <div>
      < RouterApp />
      <button onClick={()=>this.props.set_data('you can also get from hee..')} >Set Data </button>  
      </div>
    )
  }
}
const mapStateToProps = (state)=> ({
     
    username: state.auth.username,
    email:state.auth.email,
    app_name:state.app.app_name
})

 const mapDispatchToProps = (dispatch)=> ({
   
  set_data:(data)=>dispatch(set_data(data))
 
})


export default connect(mapStateToProps,mapDispatchToProps) (App);
