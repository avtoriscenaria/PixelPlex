import React from 'react'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

var Task1 = createReactClass({

	event(mytext){
		this.props.addText(mytext);
		this.refs.txt.value = null;
	},
   

	render(){
		return (
			<div class="task1">
			<div class="txt">
			 <input type="text" ref="txt" />
			 <p></p>
			 <Button id="btn" onClick={()=> this.event(this.refs.txt.value)}>Add text</Button>
			</div>
			<div class="list">
			<h3>List:</h3>
			<ListGroup class="list2">
			 {
			 	this.props.history.map(el =>(
			 		<ListGroupItem id="it" key={el.i}>
			 		<h3>{el.item}</h3>
			 		<Button onClick={()=>this.props.deleteText(el.i)}>delete text</Button>
			 		</ListGroupItem>
			 		))
			 }
			</ListGroup>
			</div>
			</div>
			)
	}
})

const mapDispachToProps = (dispach) => {
	return {
		addText: (valtxt) => dispach({type:'ADD', val: valtxt}),
		deleteText: (i) => dispach({type:'DELETE', key: i})
	}
}

const mapStateToProps = (state) => {
	return {
		history: state.history
	}
}


export default connect(mapStateToProps, mapDispachToProps)(Task1)