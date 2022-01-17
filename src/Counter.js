import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Counter =()=>{
    return(
        <View style={styles.container}>
            <Button title="-" style={{fontSize:60}} onPress={()=>{}}/>
            <Text style={styles.text}>0</Text>
            <Button title="+" style={styles.button} onPress={()=>{}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"center",
    },
    button:{
        color:'red', 
        width:50,
        height:50, 
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:50,
    }
})

export default Counter
