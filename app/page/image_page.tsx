import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ImagePage() {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center',
        alignContent: 'center',}}>
      <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2022/07/06/20/56/landscape-7306014_1280.jpg'}} width={200} height={200}/>

    </View>
  )
}


const styles = StyleSheet.create({
    image: {
        borderRadius:16,
    },
  });