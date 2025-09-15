// app/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import "../globals.css";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#4CAF50",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="help"
        options={{
          title: "Help",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />

      {/* 👇 Keep Chat hidden from drawer */}
      <Drawer.Screen
        name="chat"
        options={{
          drawerItemStyle: { display: "none" }, // hides from drawer
        }}
      />
    </Drawer>
  );
}
