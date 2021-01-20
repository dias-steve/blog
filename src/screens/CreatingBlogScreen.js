import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import { withNavigation } from 'react-navigation';


const CreatingBlogScreen = ({ navigation }) => {

    const [titleBlog, setTitleBlog] = useState('');
    const [descriptionBlog, setDescription] = useState('');
    const {addBlogPost} = useContext(Context);

    return (
        <View style={styles.viewContainer}>
            <LinearGradient
                colors={['#83450A', '#FA993F', 'rgba(250, 250, 250, 1)']}
                style={styles.linearGradient}

                //  Linear Gradient 
                start={{ x: 0, y: -0.2 }}
                end={{ x: 0, y: 0.4 }}
            >
                <Text style={styles.bigTitle}> New Blog </Text>
                <View style={styles.viewWindow}>
                    <View style={styles.viewInput}>
                        <Text style={styles.title} > Title of the new blog </Text>
                        <TextInput
                            style={styles.textInput}
                            value={titleBlog}
                            placeholder='Title of the new blog'
                            onChangeText={newValue => (
                                setTitleBlog(newValue)
                            )}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <Text style={styles.title}> Description of the new blog </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Dectription of the new blog'
                            value={descriptionBlog}
                            onChangeText={newValue => (
                                setDescription(newValue)
                            )}
                        />
                    </View>
                    <TouchableOpacity
                        onPress = {()=> (
                            console.log('ok post'),
                            addBlogPost(
                                titleBlog, 
                                descriptionBlog, 
                                () => {console.log('callback');
                                    navigation.navigate('Index');
                            })
                                
                            )}
                    >
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 6,
        marginTop: 15,
        color: '#585858',
        fontWeight: 'bold'

    },
    textInput: {
        marginHorizontal: 10,
        height: 50,
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 14,
        borderColor: '#D8D8D8',
        borderWidth: 2,
        borderRadius: 30,
        color: '#447A35',
        marginVertical: 10
    },
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    viewInput: {
        marginBottom: '10%',
        marginHorizontal: 5

    },
    viewWindow: {

        borderRadius: 20,
        marginHorizontal: 50,
        elevation: 15,
        backgroundColor: 'white',
        marginTop: 100
    },
    linearGradient: {
        flex: 1,

        flexDirection: 'column',

    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#F89336',
        alignSelf: 'center',
        height: 50,
        width: 200,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: 'center'

    },
    textButton: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    bigTitle: {
        fontSize: 45,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 40,
        fontWeight: 'bold',
        marginLeft: 10
    }

})
export default withNavigation(CreatingBlogScreen);
