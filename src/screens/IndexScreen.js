import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { SimpleLineIcons } from '@expo/vector-icons';

const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    console.log(`>> state:`, state)
    return <View>
            <Button
            title = "Add blog"
            onPress= {() => (
                console.log("+"),
                addBlogPost()
            )}
            />
      
        <FlatList
            keyExtractor = {data => data.id}
            data = {state}
            renderItem = {({item}) => {
                return (<View style= {styles.itemlist}><Text> {item.title} - {item.id} </Text> 
                <TouchableOpacity
                    onPress = {() =>( 
                        deleteBlogPost(item.id),
                        console.log(item.id))}
                    >
                <SimpleLineIcons name="trash" size={24} color="black" />
                </TouchableOpacity>
                </View>
                
               
                
                );
            }}
        />
    
    </View>
};

const styles = StyleSheet.create({
    itemlist: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 60,
        alignItems: 'center',
        marginHorizontal: 13
        
        
    },
 

});
export default IndexScreen;