import { View, Text, Pressable, StyleSheet, ButtonProps, GestureResponderEvent, TouchableNativeFeedbackProps, Alert } from 'react-native'
import React from 'react'

export default function PressablePage() {
 const myFunction = ()=> {
    Alert.alert('Pressed! From Secondary Button')
    //or use hooks
 }
  return (
    <View style={{margin:24, gap:8}}>
      <Pressable onPress={() => console.log('Pressed!')}>
        <Text>This Pressable to</Text>
      </Pressable>
      <CustomButton title='Primary' type='primary' onPress={()=>console.log('Pressed! From Primary Button')} />
      <CustomButton title='Secondary' type='secondary' onPress={myFunction}/>
    </View>
  )
}

export type CustomButtonProps = ButtonProps & {
    type?: 'primary' | 'secondary' | 'text';
    title?: string;
    onPress: TouchableNativeFeedbackProps;
}
//cannot use export `default` in same file
export function CustomButton({type = 'primary', title, onPress}:CustomButtonProps) {
    return (
      <Pressable
        onPress={onPress}
        style={[
            styles.button,
            type === 'primary'? styles.primaryButton : undefined,
            type === 'secondary' ? styles.secondaryButton : undefined,
        ]}
        >
        <Text style={[
            styles.buttonText,
            type === 'primary'? styles.buttonTextPrimary : undefined,
            type === 'secondary' ? styles.buttonTextScondary : undefined,
        ]}>{title}</Text>
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 5,
    },
    primaryButton: {
      backgroundColor: 'blue',
    },
    secondaryButton: {
      backgroundColor: 'white',
      borderColor: 'grey',
      color: 'grey'
    },
    buttonText:{
        textAlign:'center'
    },
    buttonTextPrimary:{
        color: 'white'
    },
    buttonTextScondary:{
        color: 'blue'
    }
    
  });