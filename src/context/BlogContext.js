import React, {useState, useReducer} from 'react';
import creatDataContext from '../context/creatDataContext';


const reducer = (state, action) => {
    switch(action.type){
        case 'change_more': 
            return [...state,{title:`BlogPost#${state.length+1}`}];
        default:
            return [...state];
    }
        
}

const addBlogPost = dispatch => {
    return () => {dispatch({type: 'change_more'})};
}

// {addBlogPost} => Cela veut dire que nous passons la fonction
// addBlogPost dans un objet 
// => resultat de l'objet: {addblogPost: (dispatch) => {return () => ()}}

export const {Context, Provider} = creatDataContext(
    reducer,
    {addBlogPost},
    []
    );
