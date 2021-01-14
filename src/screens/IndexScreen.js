import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext);
    console.log(`>>${data}`)
    return <View>
        
        <Text>IndexScreen </Text>
        <FlatList
            keyExtractor = {data => data.title}
            data = {data}
            renderItem = {({item}) => {
                return <Text> {item.title} </Text>
            }}
        />
        <Button
            title = "+"
            onPress= {() => (
                console.log("+"),
                addBlogPost()
            )}
            />
    </View>
};

const styles = StyleSheet.create({

});
export default IndexScreen;