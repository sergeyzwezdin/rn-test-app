import { ScrollView, Text, View } from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={{ backgroundColor: "#7e57c2", height: "100%" }}>
      <View style={{ backgroundColor: "#42a5f5", padding: 20, height: 80 }}>
        <Text>Header</Text>
      </View>

      <View style={{ backgroundColor: "#ec407a", padding: 20, flex: 1 }}>
        <ScrollView>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
          <Text>Main</Text>
        </ScrollView>
      </View>

      <View style={{ backgroundColor: "#9ccc65", padding: 20, height: 80 }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}
