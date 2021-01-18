import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";

const DetailBlogScreen = ({navigation}) =>{
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogpost = state.find((blog) => blog.id === id );
   
    console.log('detailblogscreen', blogpost)
    return <Text> Detail Blog Screen {blogpost.title} </Text>
};

export default DetailBlogScreen;



