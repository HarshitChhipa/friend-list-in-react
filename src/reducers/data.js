/**
 * It is not used till now in the application I tried adding the state management but it couldn't be implemented
 * Successfully at this point of time.
 *
 * This is the core of state management.
 */

import {FETCH_FRIENDS_LIST} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_LIST:
            return action.payload;
        default:
            return state;
    }
};