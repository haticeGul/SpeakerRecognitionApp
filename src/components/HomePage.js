import React,{Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity} from 'react-native'

export default class HomePage extends Component{
        render(){
            return(
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}> Log in </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button}>
                           <Text style={styles.buttonText}> Register </Text>
                    </TouchableOpacity >
        
                 </View>
             
            );}} 

    const styles =StyleSheet.create({
        button: {
            alignSelf:'stretch',
            flex:1/5,
            marginTop:20,
            backgroundColor:'rgba(0, 0, 0, 0.8)',
            padding:20
        },
        buttonText: {
            color:'#fff',
            
          },
          container: {
            alignSelf: 'stretch',
            flex:1,
            backgroundColor: '#F5FCFF', 
          },
    });