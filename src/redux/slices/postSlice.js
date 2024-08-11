import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { sub } from "date-fns";
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

// const initialState = [
//     {
//         id: "1",
//         title: "Learning Redux toolkit",
//         content: "I've heard good things.",
//         date: sub(new Date(), { minutes: 10 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0,
//         },
//     },
//     {
//         id: "2",
//         title: "Slices...",
//         content: "The more I say slice, the more I want pizza",
//         date: sub(new Date(), { minutes: 5 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0,
//         },
//     },
// ];

const initialState = {
    posts: [],
    status: 'idle', // 'idle' || 'loading' || 'succeeded' || 'failed'
    error: null,
}

const slice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                };
            },
        },
        // ? Simple way
        // postAdded(state, action) {
        //     state.push(action.payload);
        // }
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post => String(post.id) === String(postId));
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    },
});

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionAdded } = slice.actions;

export default slice.reducer;



export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(POSTS_URL);
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
        } catch (error) {
            console.error('Error fetching posts:', error);
            dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
        }
    };
};