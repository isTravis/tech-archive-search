/* ---------- */
// Load Actions
/* ---------- */
import {
	GET_DATA_LOAD,
	GET_DATA_SUCCESS,
	GET_DATA_FAIL,
} from 'actions/app';

/* ------------------- */
// Define Default State
/* ------------------- */
const defaultState = {
	appData: undefined,
	loading: false,
};

/* ----------------------------------------- */
// Bind actions to specific reducing functions
/* ----------------------------------------- */
export default function reducer(state = defaultState, action) {
	switch (action.type) {
	case GET_DATA_LOAD:
		return {
			appData: undefined,
			loading: true,
		};
	case GET_DATA_SUCCESS:
		return {
			appData: action.result,
			loading: false,
		};
	case GET_DATA_FAIL:
		return {
			appData: 'Error!',
			loading: false,
		};
	default:
		return state;
	}
}
