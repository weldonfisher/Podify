import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/Logo.png")} style={styles.logo} />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text>LoginLoginLogin</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D12",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  }
  

});
