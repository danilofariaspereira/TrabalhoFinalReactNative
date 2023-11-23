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
    gap: 20,
  
  },
  image: {
    width: 170,
    height: 120,
    marginBottom: 90,
  },
  field: {
    padding: 15,
    paddingVertical: 14,
    position: "relative",
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
    marginTop: -60,
  },
  button: {
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: colors.tertiary,
    padding: 15,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 15,
  },  
  text: {
    color: colors.secondary,
    fontSize: 15,
  }
});
