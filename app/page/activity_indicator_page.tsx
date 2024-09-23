import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function ActivityIndicatorPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loading, please wait...</Text>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}