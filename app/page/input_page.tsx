import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function TextInputPage() {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    const [value, onChangeMultiText] = useState('Useless Multiline Placeholder');

    // If you type hexcode color in the text box, the background will change to that color
    return (
        <SafeAreaView>
        <Text style={{marginTop:16, marginLeft:16}}>TextInputPage</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        <View
        style={{
            backgroundColor: value,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
            margin:16,
        }}>
        <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeMultiText(text)}
            value={value}
            style={{padding: 10}}
        />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });