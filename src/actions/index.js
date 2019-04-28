import {friendsRef} from '../config/firebase';
import {FETCH_FRIENDS_LIST} from './types';

/**
 * List of Actions in the Application.
 * @param newFriends
 * @returns {Function}
 */
export const addFriends = newFriends => async dispatch => {
    friendsRef.push().set(newFriends);
};

export const fetchToDos = () => async dispatch => {
    friendsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_FRIENDS_LIST,
            payload: snapshot.val()
        });
    });
};