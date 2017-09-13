import * as acts from '../actions';
import _ from 'lodash';

export default function( state={}, action ) {
    console.log(action)
    const { payload, id, postid } = action;
    // console.log(payload.data)
    switch(action.type) {
        case acts.FETCH_POSTS:
            // console.log(action)
            return _.mapKeys(action.payload, 'id');
        case acts.FETCH_CATEGORY_POSTS:
            return _.mapKeys(action.payload, 'id');
            // return _.pickBy(posts, ( value, key ) => {
            //     return _.isEqual(key['category'], posts.category);
            // });
        case acts.FETCH_POST:
            return { ...state, [payload.id]: payload };
        // case acts.CREATE_POST:
        //     const id = uuidv4()
        //     return { ...state, [postreq.id]: postreq }
        //     // return {
        //     //     ...state,
        //     //     [id]: {
        //     //         id,
        //     //         timestamp: Date.now(),
        //     //         title,
        //     //         body,
        //     //         author,
        //     //         category,
        //     //         voteScore: 0,
        //     //         deleted: false 
        //     //     }
        //     // }
        // case acts.UPDATE_POST:
        //     return {
        //         ...state,
        //         [id]: {
        //             ...state[id],
        //             title,
        //             body,
        //             author,
        //             category
        //         }
        //     }
        case acts.REMOVE_POST:
            // return _.omit(state, payload)
            return { ...state, [payload]: { ...state[payload], deleted: true } };
            // return {
            //     ...state,
            //     [id]: {
            //         ...state[id],
            //         deleted: true
            //     }
            // }
        case acts.VOTE_POST:
            return { ...state, [payload.id]: payload };
            // return {
            //     ...state,
            //     [id]: {
            //         ...state[id],
            //         voteScore: voteScore + 1
            //     }
            // }
        case acts.FETCH_COMMENTS:
            console.log(payload)
            if ( payload.length > 0 ) {
                return { ...state, [payload[0].parentId]: { ...state[payload[0].parentId], comments: _.mapKeys(payload, 'id') } };
            } else {
                return state
            }
        // case acts.CREATE_COMMENT:
        //     return { ...state, [] }
            // return {
            //     ...state,
            //     [id]: {
            //         id,
            //         parentId,
            //         timestamp: Date.now(),
            //         body,
            //         author,
            //         voteScore: 0,
            //         deleted: false,
            //         parentDeleted: false
            //     }
            // }
        // case acts.UPDATE_COMMENT:
        //     return {
        //         ...state,
        //         [id]: {
        //             ...state[id],
        //             body,
        //             author
        //         }
        //     }
        case acts.REMOVE_COMMENT:
            return { ...state, [postid]: { ...state[postid], comments: { ...state[postid].comments, [payload.id]: payload } } };
            // return {
            //     ...state,
            //     [id]: {
            //         ...state[id],
            //         deleted: true
            //     }
            // }
        case acts.VOTE_COMMENT:
        return { ...state, [postid]: { ...state[postid], comments: { ...state[postid].comments, [payload.id]: payload } } };
            // return {
            //     ...state,
            //     [id]: {
            //         ...state[id],
            //         voteScore: voteScore + 1
            //     }
            // }
        default:
            return state;
    }
}
