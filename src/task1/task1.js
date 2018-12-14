import reduser from './redux/rdx.js'
import Task1 from './redux/container.js'


import React, {Component} from 'react'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reduser)

class GeneralTask1 extends Component{
	render(){
		return(
		   <Provider store={store}>
		   <Task1 />
		   </Provider>
	    );
    }
}

export default GeneralTask1