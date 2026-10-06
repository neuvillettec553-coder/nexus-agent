import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#0B0F19', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#F5F7FF', fontSize: 28, fontWeight: '700' }}>Nexus Agent</Text>
        <Text style={{ color: '#A0A7BD', marginTop: 8 }}>App instalado com sucesso ✅</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
