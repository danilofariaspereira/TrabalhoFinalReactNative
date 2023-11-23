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
    backgroundColor: "#1e1e1e",
    flex: 1,
    gap: 20

  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 80,
    marginTop: 60,
  },
  textInput: {
    width: '80%',
    gap: 20
  },
  
});

