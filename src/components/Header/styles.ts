import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container:{
        zIndex:1,
        width: '100%',
        flexDirection:'row',
        backgroundColor: '#000',
        justifyContent:'space-between',
        alignItems: "center",
        padding: 8,
        paddingTop: Platform.OS === 'ios' ? 60 : 0
    },
    logo:{
        height: 60,
        width: 90,
        marginLeft: 40
    },
    img:{
        flexDirection:'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '20%',
        height: '100%',
    },
    input:{
        backgroundColor: '#424242',
        height: 35,
        width: 190,
        borderRadius: 15,
        paddingLeft: 10,
        color: 'white',
        marginRight: 10
    },
    icon: {
        width: 25,
        height: 25,    
        marginRight: 5    
    },
    search:{
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 5,
        backgroundColor: '#424242',
        borderRadius: 15,
        marginRight: 10
    }
});