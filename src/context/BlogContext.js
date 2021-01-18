import React, {useState, useReducer} from 'react';
import creatDataContext from '../context/creatDataContext';


const reducer = (state, action) => {
    switch(action.type){
        case 'change_more': 
            return [...state,{id: Math.floor(Math.random()*9999),
                title:`BlogPost#${state.length+1}`}];
        case 'delete_blog':
            console.log("obj", action)
            return state.filter((blogpost)=> blogpost.id !== action.payload);
        default:
            return [...state];
    }
        
}

const addBlogPost = dispatch => {
    return () => {dispatch({type: 'change_more'})};
};

const deleteBlogPost = (dispatch) => {
    return (id) => {dispatch({type: 'delete_blog',payload: id })};
}

// {addBlogPost} => Cela veut dire que nous passons la fonction
// addBlogPost dans un objet 
// => resultat de l'objet: {addblogPost: (dispatch) => {return () => ()}}

export const {Context, Provider} = creatDataContext(
    reducer,
    {addBlogPost,deleteBlogPost},
    []
    );
