//This is our master reducers file. It doens't manage any particular piece of state. It manages /contains all the other reducers (which contain a piece of state)

// Get the combinedReducers method from redux
import { combineReducers } from 'redux';

//Import each reducer here.
// First: StudentReducer
import StudentReducer from './StudentReducer.js';
import StudentReducer2 from './StudentReducer2.js';


const rootReducer = combineReducers({
	// Inside here, we pass each reducer as a key/property. Each property/key will be available as state.key.
	students: StudentReducer,//because of this line, we now have state.students
	students2: StudentReducer2

});


export default rootReducer;