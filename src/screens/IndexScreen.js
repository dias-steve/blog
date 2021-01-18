import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context);
    console.log(`>>${state}`)
    return <View>
            <Button
            title = "Add blog"
            onPress= {() => (
                console.log("+"),
                addBlogPost()
            )}
            />
      
        <FlatList
            keyExtractor = {data => data.title}
            data = {state}
            renderItem = {({item}) => {
                return <Text> {item.title} </Text>
            }}
        />
    
    </View>
};

const styles = StyleSheet.create({


});
export default IndexScreen;