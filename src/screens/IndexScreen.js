import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { SimpleLineIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    console.log(`>> state:`, state)
    return <View style={styles.container}>


        <View style={styles.list}>
            <FlatList
               
                keyExtractor={data => data.id}
                data={state}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemlist}>
                            <TouchableOpacity
                                onPress={
                                    () => (
                                        console.log("blog detail de ", item.id),
                                        navigation.navigate('Detail', { id: item.id })
                                    )
                                }
                            >
                                <Text> {item.title} - {item.id} </Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => (
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
        <TouchableOpacity
            onPress={() => (
                console.log("+"),
                addBlogPost()
            )}
        >
            <View style={styles.ButtonAdd}><Text style={styles.textButton}> Add Blog</Text></View>

        </TouchableOpacity>

    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'blue'
    },
    itemlist: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 60,
        alignItems: 'center',
        marginHorizontal: 13,
        
    },
    ButtonAdd: {
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 6,
        marginHorizontal: 10,
        height: 70,
        justifyContent: 'center'
    },

    textButton: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'black',
        borderWidth: 5,
        borderColor:'green'
       

    },
    list: {
        flex:1,
        borderWidth: 8,
        borderColor: 'red'
    }


});
export default withNavigation(IndexScreen);