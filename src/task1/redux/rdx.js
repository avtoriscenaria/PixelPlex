const initialState = {
	history: []
}

const reducer = (state = initialState, action)=>{
	

	if(action.type === 'ADD' && action.val != ""){
		return {
			
			history: state.history.concat({i: Math.random(), item: action.val})
		}
	}

	if(action.type === 'DELETE'){
		return {
			
			history: state.history.filter(el => el.i !== action.key)
		}
		
	}

	return state;
}

export default reducer

