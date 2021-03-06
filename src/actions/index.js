import { uuidv4 } from '../utils/helpers';
const api = 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

// POSTS
// Fetch, create, update, remove posts
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const PRE_UPDATE_POST = 'PRE_UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
// Increment and decrement post score through option variable
export const VOTE_POST = 'VOTE_POST';
// Sort posts by date or score
export const SORT_POSTS = 'SORT_POSTS';
export const SORT_POSTS_SCORE = 'SORT_POSTS_SCORE';

// COMMENTS
// Fetch, create, update, remove comments
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const PRE_UPDATE_COMMENT = 'PRE_UPDATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
// Increment and decrement comment score through option variable
export const VOTE_COMMENT = 'VOTE_COMMENT';




// Post Action Creators
export const fetchPosts = () => {
    const posts = fetch(`${api}/posts`, { headers })
        .then(res => res.json())
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export const fetchCategoryPosts = ( category ) => {
    const posts = fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
    return {
        type: FETCH_CATEGORY_POSTS,
        payload: posts
    }
}

export const fetchPost = ( id ) => {
    const post = fetch(`${api}/posts/${id}`,{ headers })
        .then(res => res.json())
    return {
        type: FETCH_POST,
        payload: post
    }
}

export const createPost = ( post, callback ) => {
    post.id = uuidv4();
    post.timestamp = Date.now();
    const postreq = fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
            .then(() => callback());
    return {
        type: CREATE_POST,
        payload: postreq
    }
}

export const preUpdatePost = (post) => {
    return {
        type: PRE_UPDATE_POST,
        payload: post
    }
}

export const updatePost = ( post, callback ) => {
    const postreq = fetch(`${api}/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
            .then(() => callback())
    return {
        type: UPDATE_POST,
        payload: postreq
    }
}

export const removePost = ( post, callback ) => {
    const postreq = fetch(`${api}/posts/${post.id}`, { 
        method: 'DELETE', 
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post) 
    }).then(res => res.json())
        .then(() => callback())
    return {
        type: REMOVE_POST,
        payload: post
    }
}

// Increment/Decrement Vote Post Action Creators
export const votePost = ( post, option ) => {
    post.option = option;
    const postreq = fetch(`${api}/posts/${post.id}`,{
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
    return {
        type: VOTE_POST,
        payload: postreq
    }
}

// Sort Posts
export const sortPosts = (sorter) => {
    return {
        type: SORT_POSTS,
        sorter
    }
}





// COMMENT ACTION CREATORS
export const fetchComments = ( postid ) => {
    const comments = fetch(`${api}/posts/${postid}/comments`, { headers })
        .then(res => res.json())
    return {
        type: FETCH_COMMENTS,
        payload: comments 
    }
}

export const createComment = ( comment, callback ) => {
    comment.id = uuidv4();
    comment.timestamp = Date.now();
    const commentreq = fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())
        .then(() => callback());
    return {
        type: CREATE_COMMENT,
        payload: commentreq
    }
}

export const preUpdateComment = (comment) => {
    return {
        type: PRE_UPDATE_COMMENT,
        payload: comment
    }
}

export const updateComment = ( comment, callback ) => {
    const commentreq = fetch(`${api}/comments/${comment.id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then(res => res.json())
            .then(() => callback())
    return {
        type: UPDATE_COMMENT,
        payload: commentreq
    }
}

export const removeComment = ( comment ) => {
    const commentreq = fetch(`${api}/comments/${comment.id}`, { method: 'DELETE', headers })
        .then(res => res.json())
    return {
        type: REMOVE_COMMENT,
        payload: commentreq
    }
}

// Increment/Decrement Comment Action Creators
export const voteComment = ( comment, option ) => {
    comment.option = option;
    const commentreq = fetch(`${api}/comments/${comment.id}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then(res => res.json())
    return {
        type: VOTE_COMMENT,
        payload: commentreq
    }
}




