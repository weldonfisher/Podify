import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/Logo.png")} style={styles.logo} />
      </View>
      
      <Link href="/welcome" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Link>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D12",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 40,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#6C63FF",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  }
});
