import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = () => {
    router.replace('/home');
  };

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Link href="/welcome" asChild>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Let's sign in with your Podify account</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="Email"
                placeholderTextColor="#8E8E93"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="Password"
                placeholderTextColor="#8E8E93"
                secureTextEntry
                style={styles.input}
              />
              <TouchableOpacity style={styles.eyeButton}>
                <Image source={require("../assets/images/eye-off.png")} style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
              <View style={styles.formBttons}>
               <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </TouchableOpacity>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../assets/images/apple.png")} style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../assets/images/google.png")} style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
            </View></View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Link href="/welcome" asChild>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#8E8E93",
    marginBottom: 40,
  },
  form: {
    gap: 16,
  },
  formBttons: {
    marginTop: 20,
    gap: 32,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    padding: 16,
    color: "#000000",
    fontSize: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: "#8E8E93",
  },
  forgotPassword: {
    color: "#5856D6",
    fontSize: 16,
    textAlign: "right",
  },
  signInButton: {
    backgroundColor: "#0D0D12",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginTop: 8,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 24,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    height: 56,

  },
  socialIcon: {
    width: 24,
  },
  socialButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 16,
  },
  footerText: {
    color: "#8E8E93",
    fontSize: 16,
  },
  signUpLink: {
    color: "#5856D6",
    fontSize: 16,
    fontWeight: "600",
  }
});
