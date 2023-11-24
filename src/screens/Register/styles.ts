import { StyleSheet } from "react-native";

export const colors = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#FFA500",
  alternative: "#666",
  disabled: "rgba(5, 122, 253, 0.5)",
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    flex: 1,
    gap: 20

  },
  textInput: {
    width: '80%',
    gap: 20
  },
  anyAccount: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
    width: '80%'
  },
  text: {
    color: 'white'
  },
  textRegister: {
    color: colors.tertiary
  },
  message: {
    textAlign: "center",
    fontSize: 12,
    color: "tomato",
    marginTop: -90,

  }
});

