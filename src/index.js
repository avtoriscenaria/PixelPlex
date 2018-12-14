import React from 'react'
import ReactDOM from 'react-dom'


import Header from './header/header.js'
import GeneralTask1 from './task1/task1.js'
import GeneralTask2 from './task2/task2.js'

ReactDOM.render(<Header />,
	document.getElementById('hdr')
	);

ReactDOM.render(<div>
	<GeneralTask1 />
	</div>,
	document.getElementById('tsk1')
	);

ReactDOM.render(<div>
	<GeneralTask2 />
	</div>,
	document.getElementById('tsk2')
	);