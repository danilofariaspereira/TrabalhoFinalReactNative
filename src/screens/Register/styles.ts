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
  // field: {
  //   paddingVertical: 14,
  // },
  // heading: {
  //   fontSize: 32,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: colors.secondary
  // },

  // label: {
  //   color: colors.secondary,
  // },
  // input: {
  //   borderBottomWidth: 2,
  //   borderBottomColor: colors.secondary,
  //   paddingVertical: 10,
  //   fontWeight: "bold",
  //   letterSpacing: 1,
  //   fontSize: 15,
  //   color: colors.secondary,
  // },
  // eye: {
  //   position: "absolute",
  //   right: 0,
  //   bottom: 0,
  //   fontSize: 25,
  //   color: colors.secondary,
  //   padding: 20,
  //   paddingRight: 15,
  // },

  // button: {
  //   borderRadius: 5,
  //   alignItems: "center",
  //   backgroundColor: colors.tertiary,
  //   padding: 15,
  // },
  // disabled: {
  //   backgroundColor: colors.disabled,
  // },
  // buttonText: {
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   color: colors.primary,
  //   fontSize: 15,
  // },
  // button1: {
  //   backgroundColor: colors.primary,
  //   padding: 15,
  // },
  // field1: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },

  // text: {
  //   color: colors.secondary,
  //   fontSize: 15,
  // },
  // buttonText1: {
  //   fontWeight: "bold",
  //   color: colors.tertiary,
  //   fontSize: 15,
  // },

  // icon: {
  //   position: "absolute",
  //   top: 8,
  //   left: 15,
  //   paddingLeft: 0,
  // },

  // message: {
  //   textAlign: "center",
  //   fontSize: 12,
  //   color: "tomato",
  //   marginTop: 40,
  // }
});

