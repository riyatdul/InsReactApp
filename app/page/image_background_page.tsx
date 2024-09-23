import { Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ImageBackgroundPage() {
  return (
    <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2023/05/10/18/20/plant-7984681_1280.jpg'}}
        style={styles.background}
        resizeMode="cover"
        >
        <Text style={styles.text}>Sampe Text</Text>
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2022/07/06/20/56/landscape-7306014_1280.jpg'}} width={200} height={200}/>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
    },
    image: {
        borderRadius:16,
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });