import React, {useState, useReducer} from 'react';

const BlogContext = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'change_more': 
            return [...state,{title:`BlogPost#${state.length+1}`}];
        default:
            return [...state];
    }
        
}



export const BlogProvider = ({children}) => {
    const blogPosts = [];
    const [state, dispatch] = useReducer(reducer, blogPosts);
    console.log(state);
    
    const addBlogPost = () => {
        dispatch({type: 'change_more'})
    }
    return (
    <BlogContext.Provider value = {{data: state, addBlogPost}}>
        {children}
    </BlogContext.Provider>);
};

export default BlogContext;