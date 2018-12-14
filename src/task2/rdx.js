const initialState = {
	second: 0,
	step: +localStorage.getItem('step')
}

const reducer = (state = initialState, action)=>{

	
	if(action.type === 'TIMER'){
		
			localStorage.setItem('step', action.val);
			return {step: +localStorage.getItem('step')}
	    
    }

	return state;
}

export default reducer