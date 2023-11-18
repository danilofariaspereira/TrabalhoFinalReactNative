import { StyleSheet } from "react-native";

export const colors = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#FFA500",
  alternative: "#666",
  disabled: "rgba(5, 122, 253, 0.5)",
};

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingVertical: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 15,
    color: colors.secondary,
  },
  title:{
    color: 'white'
  },
  eye:{
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 20,
    color: colors.secondary,
    padding: 20,
    paddingRight: 15,
  }
});

