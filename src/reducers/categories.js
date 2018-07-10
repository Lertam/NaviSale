import { shopsTypes } from '../constants/types';

const initialState = {
	set: [],
	current: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case shopsTypes.GET_CATEGORIES__SUCCESS: return {
			...state,
			set: action.payload.set
		};
		default: return state;
	}
}
