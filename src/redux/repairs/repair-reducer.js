import { repairActionTypes } from './repair-types';

const INITIAL_STATE = {
    repair:{},
}

export const repairReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case repairActionTypes.ADD_REPAIR_INFO:
            return {
                ...state,
                repair:action.payload
            }
        default:
            return state;
    }
}

export default repairReducer;