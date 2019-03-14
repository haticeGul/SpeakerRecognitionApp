import React,{Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity} from 'react-native'
 
export default class RegForm extends Component{
    render(){
        return(
            <View style={styles.regform}> 
            <Text style={styles.header}>Registration</Text>
            <TextInput style = {styles.textinput} placeholder="Your name"
            underlineColorAndroid = {'transparent'}/>
            <TextInput style = {styles.textinput} placeholder="Your email"
            underlineColorAndroid = {'transparent'}/>
            <TextInput style = {styles.textinput} placeholder="Your phone"
            underlineColorAndroid = {'transparent'}/>
         
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform:{
        alignSelf: 'stretch',
        color:'#199187'
    },
    header: {
        fontSize:24,
        color:'#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor :'#199187',
        borderBottomWidth:1
    },
    textinput: {
        alignSelf:'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth: 1

    },
    button:{
        alignSelf:'stretch',
             
        backgroundColor: '#59cbbd',
       
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold'
    }

});