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
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingBottom: 60
  },
  containerInfos: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageInfos: {
    width: '90%',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 190,
    height: 280,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10
  },
  iconHeader: {
    width: 20,
    height: 20,
    marginLeft: 30,
  },
  header: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: 60,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textAlign: "center"
  },
  text: {
    color: 'white',
    textAlign: "justify",
  },
  description: {
    width: '90%',
    marginTop: 45,
    gap: 15
  },
  genre: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    width: '80%'
  },
  filmInfos: {
    alignItems: "center",
    gap: 20
  },
  titleDate: {
    alignItems: "center",
    gap: 5
  },
  containerGenre: {
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    padding: 8,
    borderRadius: 8
  },
  iconStar: {
    width: 15,
    height: 15,
    tintColor: colors.tertiary
  },
  containerStar: {
    flexDirection: "row",
    gap: 7
  },
  containerTitleDescription: {
    borderLeftWidth: 2,
    borderLeftColor: '#FFA500',
    paddingLeft: 10,
  },
  titleDescription: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  }
});

