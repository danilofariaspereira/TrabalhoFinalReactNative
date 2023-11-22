import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        zIndex:1,
        width: '100%',
        height: '8%',
        flexDirection:'row',
        backgroundColor: '#032541',
        //backgroundColor: "#FFA500",
        justifyContent:'space-between',
    },
    button:{
        width: '13%',
        marginTop: 15,
        marginLeft: 25,
    },
    logo:{
        height: 60,
        width: 60,
        marginRight: 20,
    },
    usuario:{
        height: 30,
        width: 30,
        marginTop: 15,
        marginRight: 20,
    },
    img:{
        flexDirection:'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '20%',
        height: '100%',
    },
    menuOnPress: {
        position: 'absolute',
        top: 40,
        width: 150,
        //backgroundColor: "#FFA500",
        backgroundColor: '#032541',
        borderRadius: 5,
        height: 300,
    },
    menuOption: {
        flex: 1,
        flexDirection:'column',
        fontSize: 17,
        marginBottom: 8,
        paddingRight:15,
        paddingLeft:40,
        paddingTop:40,
        color: '#FFFFFF',
      },
});