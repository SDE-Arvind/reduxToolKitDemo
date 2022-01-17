import React from "react"
import { SafeAreaView, StyleSheet, View, Text } from "react-native"
import Counter from "./Counter"

const Home =()=>{
    return(
        <SafeAreaView>  
            <View style={styles.container}> 
                <Counter/>
            </View>   
        </SafeAreaView>)
}

const styles = StyleSheet.create({
container:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
},
text: {
    marginTop: 32, 
    paddingHorizontal: 24,
},
})

export default Home