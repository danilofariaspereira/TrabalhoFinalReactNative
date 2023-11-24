import { StyleSheet } from "react-native";

export const colors = {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#FFA500",
    alternative: "#666",
    disabled: "rgba(5, 122, 253, 0.5)",
};

export const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 40,
        backgroundColor: colors.tertiary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        fontWeight: '600'
    }
});

