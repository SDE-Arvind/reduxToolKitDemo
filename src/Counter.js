import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { useDispatch,useSelector } from "react-redux"
import { decrement, increment } from "./CounterSlice"

const Counter =()=>{

    const dispatch = useDispatch()
    const counterSlice=useSelector((state)=>state.counterSlice)
    return(
        <View style={styles.container}>
            <Button title="-" style={{fontSize:60}} onPress={()=>{dispatch(decrement())}}/>
            <Text style={styles.text}>
                { counterSlice.counter }  
            </Text>
            <Button title="+" style={styles.button} onPress={()=>{dispatch(increment())}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"center",
    },
    button:{
    },
    text:{
        fontSize:50,
    }
})

export default Counter
