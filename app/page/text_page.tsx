import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function TextPage() {
  return (
    <View style={styles.container}>
      <ThemedText type='title'>Hello, I'm a Cat</ThemedText>
      <ThemedText type='subtitle'>Hello, I'm a Cat</ThemedText>
      <ThemedText type='default'>Hello, I'm a Cat</ThemedText>
      <ThemedText type='defaultSemiBold'>Hello, I'm a Cat</ThemedText>
      <ThemedText type='subtitle' style={{textDecorationLine:'line-through'}}>Hello, I'm a Cat</ThemedText>
      <ThemedText type='subtitle' style={{fontStyle:'italic'}}>Hello, I'm a Cat</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:24,
        gap: 8,
    }
})

