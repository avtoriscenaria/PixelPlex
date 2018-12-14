import reduser from './rdx.js'
import Task2 from './container.js'


import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reduser);

class GeneralTask2 extends Component{
	render(){
		return(
		   <div >
		   <Provider store={store}>
		   <Task2 class="slider" />
		   </Provider>
		  </div>
	    );
    }
}

export default GeneralTask2