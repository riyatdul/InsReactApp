import { CommonActions } from '@react-navigation/native';
import { useNavigation, } from 'expo-router'
import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function MainPage() {
    const navigation = useNavigation();
    const handleResetAction = () => {
        navigation.dispatch(CommonActions.reset({
          routes: [{key: "(tabs)", name: "(tabs)"}]
        }))
      }
  return (
    <View>
        <Pressable style={styles.button} onPress={handleResetAction}>
            <Text style={styles.text}>Logout Here</Text>
        </Pressable>
    </View>
  )
  
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

