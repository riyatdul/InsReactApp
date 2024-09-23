import {StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'

export default function KeyboardAvoidViewPage() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" // Additional padding when the keyboard is open.
    >
      <TextInput
        placeholder="Type something here"
        style={styles.textInput}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      margin: 20,
    },
  });