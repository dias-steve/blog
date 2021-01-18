import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { SimpleLineIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const IndexScreen = ({navigation}) => {

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
                return (<View style= {styles.itemlist}>
                    <TouchableOpacity
                        onPress = {
                          () => ( 
                                console.log("blog detail de ", item.id),
                                navigation.navigate('Detail',{id: item.id})
                                )  
                        }
                        >
                        <Text> {item.title} - {item.id} </Text>

                    </TouchableOpacity>
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
export default withNavigation(IndexScreen);