import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { SimpleLineIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
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
                                <Text style = {styles.itemtitle}> {item.title} - {item.id} </Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => (
                                    deleteBlogPost(item.id),
                                    console.log(item.id))}
                            >
                                <SimpleLineIcons name="trash" size={24} color='#447A35' />
                            </TouchableOpacity>
                        </View>

                    );
                }}
            > 
 
         </FlatList>  
         
        </View>
      
    <View style = {styles.ButtonContainer}>
    
    <LinearGradient
        colors={['rgba(0, 0,0, 0)', 'rgba(255, 255, 255, 1)']}
        style={{flex: 1}}
        //  Linear Gradient 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.2 }}
        >
           
        <View style={styles.ButtonAdd}>
            <TouchableOpacity
                onPress={() => (
                    console.log("+"),
                    navigation.navigate('Creating')
                )}
                style = {styles.touchablebutton}
            >
                <Feather name="plus" style={styles.plus} />
            </TouchableOpacity>
        </View>
          </LinearGradient>  

        
    </View>



        
    </View>
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity 
                onPress = {()=> (
                    navigation.navigate('Creating')
                )}
            >
                <Feather name="plus" size={30} style = {{marginLeft: 10 }}/>
            </TouchableOpacity>
            )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'flex-end'
        
       
    },
    itemlist: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        marginHorizontal: 13,
        backgroundColor:'#DAFAD1',
        borderRadius:10,
        marginVertical: 8,
        paddingHorizontal: 20
        
      
        

    },
    itemtitle: {
        color: '#447A35'
        

    },

    ButtonAdd: {
        
        flexDirection: 'row',
        width: 70,
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#F89336',
        borderRadius: 50,
        alignSelf: 'center',
        elevation: 4,
        marginBottom: 10,
        marginTop: 10,
        
        

    },

    plus: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white'




    },
    touchablebutton:{
        alignSelf: 'center'
    },
    list: {
        
     
        height: '100%',
        width:'100%',
        position: 'absolute',
        paddingBottom : 120
       
      
   
    },
    linearGradient: {
        width: '100%',
        height: '10%',
      
       
        
     
      
        
      },
    ButtonContainer: {
        height: 150,
        width: '100%',
        position: 'absolute',
        alignSelf: 'flex-end'
       
       
        
        
       
    }


});
export default withNavigation(IndexScreen);