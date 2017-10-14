import * as acts from '../actions';
import _ from 'lodash';

export default function( state={}, action ) {
    const { payload, sorter } = action;
    const filterDeleted = (req) => _.pickBy( req, (value, key) => !(value.deleted) );
    switch(action.type) {
        case acts.FETCH_POSTS:
        case acts.FETCH_CATEGORY_POSTS:
            return filterDeleted( _.mapKeys(payload, 'id'));
        case acts.FETCH_POST:
            return filterDeleted({ [payload.id]: payload });
        case acts.PRE_UPDATE_POST:
            console.log(payload);
            return { ...payload, update: 'yes' };
        case acts.REMOVE_POST:
            return { ...state, [payload.id]: { ...state[payload.id], deleted: true } };
        case acts.VOTE_POST:
            console.log(payload)
            return { ...state, [payload.id]: { ...state[payload.id], voteScore: payload.voteScore } };
        case acts.SORT_POSTS:
            console.log(state)
            return _.mapKeys(_.sortBy(state, sorter).reverse(),'id');
        case acts.FETCH_COMMENTS:
            console.log(payload)
            if ( payload.length > 0 ) {
                return { ...state, [payload[0].parentId]: { ...state[payload[0].parentId], comments: filterDeleted(_.mapKeys(payload, 'id')) } };
            } else {
                return state;
            }
        case acts.PRE_UPDATE_COMMENT:
            return { post: state, commentToUpdate: 'yes', comment: payload };
        case acts.REMOVE_COMMENT:
            return { [payload.parentId]: 
                { ...state[payload.parentId], comments: filterDeleted({ ...state[payload.parentId].comments, [payload.id]: payload }) } };
        case acts.VOTE_COMMENT:
            return { ...state, [payload.parentId]: { ...state[payload.parentId], comments: { ...state[payload.parentId].comments, [payload.id]: payload } } };
        default:
            return state;
    }
}
