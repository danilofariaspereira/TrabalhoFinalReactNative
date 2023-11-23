import { StyleSheet } from "react-native";

export const colors = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#FFA500",
  alternative: "#666",
  disabled: "rgba(5, 122, 253, 0.5)",
};

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary,    
    alignItems: "center",
    justifyContent: "center",
  },
  imageInfos:{
    flexDirection: "row",
    width: '90%'
  },
  image: {
    width: 130,
    height: 190  
  },
  iconHeader:{
    width: 100,
    height: 100  
  },
  title:{
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  text:{
    color: 'white'
  },
  description:{
    width: '90%',
    marginTop: 15
  }
});

