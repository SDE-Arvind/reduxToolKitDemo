import React from "react"
import { Button, Text, View } from "react-native"
import { useDispatch,useSelector } from "react-redux"
import { getUsers } from "./UserSlice"

const AsyncCall=()=>{

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)


    function usersName(users)
    {
        let usersName=""
        users.forEach(element=>{
            usersName+=""+element.name+"\n"
        })
        console.log(usersName)

        return usersName
    }

    return(
        <View>
            <Button title="CallAPI" onPress={()=>{dispatch(getUsers())}}></Button>
            <Text style={{fontSize:20}}>{users.status}</Text>
            <Text>{usersName(users.users)}</Text>           
        </View>
    )
}

export default AsyncCall