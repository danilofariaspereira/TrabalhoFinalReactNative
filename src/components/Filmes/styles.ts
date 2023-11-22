import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex: 1,
    },
    filmes:{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    text:{
        marginBottom:30,
        marginTop:30,
        // width: '100%',
         height: 39,
        color: 'white',
        fontSize: 30,
        paddingLeft:10,
        marginLeft:15,
        borderLeftWidth: 3,
        borderLeftColor:'#FFA500',
        marginVertical: 5,
    },
    scrollView: {
        width: '100%',
        height: '100%',
        marginHorizontal: 10,
    },
    movieContainer: {
        width: '20%',
        height: '50%',
        marginRight: 20,
        marginLeft: 20,
        marginTop:0,
    },
    movieImage: {
        resizeMode: 'cover',
        width: "100%",
        height: "90%",
        borderRadius: 8,
    },
    movieText: {
        color: "#f5f5f5",
        marginTop: 5,
        textAlign: "center",
    },
})