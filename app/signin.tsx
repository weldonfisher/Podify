import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <ImageBackground 
      source={require("../assets/images/Welcome BG.png")} 
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={require("../assets/images/Logo.png")} 
            style={styles.logo} 
          />
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>Discover your{'\n'}next favorite podcast.</Text>
          <Text style={styles.description}>
            Dive into a world of endless stories, insights, and entertainment. Start exploring now and listen to podcasts tailored just for you!
          </Text>


            
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logoContainer: {
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 160,
    resizeMode: "contain",
  },
  bottomSection: {
    position: 'absolute',
    bottom: 50,
    left: 24,
    right: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.8,
    lineHeight: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F57FF",
    padding: 16,
    borderRadius: 12,
    width: "47%",
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    width: "47%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonsContainer: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  

});
