import React, { Component } from 'react';
//We need some glue! This component (container) needs to know about our redux 
//We include the connect method from react-redux(the glue!)
import { connect } from 'react-redux';

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		});
		this.props.students2.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		});
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		//From our master reducer, we have a "state" object
		//Inside our state object, we need to have a property: students
		//We need to set up the state of that object, to the props of this component
		students: state.students,
		students2: state.students2
	}
};

//Send component this info
//Makes info on left (mapStateToProps) available to component on the right(ReduxStye)
// connect(component)(state it needs to know about)
//so component = mapStateToProps
//state it needs to know about: ReduxStyle
export default connect(mapStateToProps)(ReduxStyle);