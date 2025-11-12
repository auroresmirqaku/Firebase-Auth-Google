// app/(auth)/signup.jsx
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { Link, router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) return Alert.alert("Kujdes", "Shkruaj email dhe fjalëkalim (min. 6).");
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/");
    } catch (e) {
      Alert.alert("Gabim", e.message);
    }
  };

  const handleGoogleWeb = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace("/index");
    } catch (e) {
      Alert.alert("Gabim", e.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F4E9", padding: 16, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>Regjistrohu</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password (min. 6)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 8, marginBottom: 16 }}
      />

      <Pressable onPress={handleSignup}
        style={{ backgroundColor: "#355E3B", padding: 14, borderRadius: 10, alignItems: "center", marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontWeight: "600" }}>Krijo Llogari</Text>
      </Pressable>

      <Pressable onPress={handleGoogleWeb}
        style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#ccc", padding: 14, borderRadius: 10, alignItems: "center" }}>
        <Text style={{ fontWeight: "600" }}>Vazhdo me Google</Text>
      </Pressable>

      <View style={{ marginTop: 16, flexDirection: "row" }}>
        <Text>Ke llogari? </Text>
        <Link href="/(auth)/login" style={{ color: "#355E3B", fontWeight: "700" }}>Hyr</Link>
      </View>
    </View>
  );
}
