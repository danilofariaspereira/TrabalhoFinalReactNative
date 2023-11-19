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
    justifyContent: "flex-start",
    backgroundColor: colors.primary,
    flex: 1,
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain", 
    marginTop:10,
  },
  field: {
    paddingVertical: 14,
    position: "relative",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 5,
    padding: 15,
    color: colors.secondary,
  },
  searchButton: {
    backgroundColor: colors.tertiary,
    padding: 15,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
  },
  searchButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 15,
  },
});
