import { Image, StyleSheet, Platform, View, Button, Alert, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Components</ThemedText>
        <HelloWave/>
      </ThemedView>
      <ScrollView>
        <Button title='Container/Box' color="#00008b"/>
        <Button title='Text' color="#00008b"/>
        <Button title='TextInput' color="#00008b"/>
        <Button title='Pressable' color="#00008b"/>
        <Button title='Image' color="#00008b"/>
        <Button title='Image Backgroud' color="#00008b"/>
        <Button title='Switch' color="#00008b"/>
        <Button title='StatusBar' color="#00008b"/>
        <Button title='ActivityIndicator' color="#00008b"/>
        <Button title='Modal' color="#00008b"/>
        <Button title='Alert' color="#00008b" onPress={() => Alert.alert('Left button pressed')}/>
        <View style={styles.divider}></View>
        <Button title='Layout-Flexbox' color="#ff7f50"/>
        <Button title='Accessbility' color="#ff7f50"/>
        <Button title='ScrollView (This Page)' color="#ff7f50"/>
        <Button title='ListView-FlatList' color="#ff7f50"/>
        <Button title='ListView-SectionList' color="#ff7f50"/>
        <Button title='Refresh Control' color="#ff7f50"/>
        <Button title='Touchables' color="#ff7f50"/>
        <Button title='Gesture Responder System' color="#ff7f50"/>
        <Button title='Scrolling and Swiping' color="#ff7f50"/>
        <Button title='Animation' color="#ff7f50"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  divider:{
    backgroundColor: "#00008b",
    height: 1.25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
