// app/index.jsx
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) router.replace("/login"); // jo i loguar -> te login
    });
    return unsub;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 20 }}>Je brenda 👋</Text>
      <Pressable onPress={handleLogout} style={{ backgroundColor: "#355E3B", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#fff" }}>Dil</Text>
      </Pressable>
    </View>
  );
}
