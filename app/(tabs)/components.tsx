import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ComponentScreen() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <ThemedText type='subtitle'>Components</ThemedText>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding:24,
      },
})
