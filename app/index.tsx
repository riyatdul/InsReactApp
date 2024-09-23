import { Image, StyleSheet, Platform, View, Button, Alert, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Components</ThemedText>
        <HelloWave/>
      </ThemedView>
      <ScrollView>
        <Button title='Container/Box' color="#00008b"/>
        <Button title='Text' color="#00008b" onPress={()=>router.push("/page/text_page")}/>
        <Button title='TextInput' color="#00008b" onPress={()=>router.push("/page/input_page")}/>
        <Button title='Pressable' color="#00008b" onPress={()=>router.push("/page/pressable_page")}/>
        <Button title='Image' color="#00008b" onPress={()=>router.push("/page/image_page")}/>
        <Button title='Image Backgroud' color="#00008b" onPress={()=>router.push("/page/image_background_page")}/>
        <Button title='Switch' color="#00008b" onPress={()=>router.push("/page/switch_page")}/>
        <Button title='StatusBar' color="#00008b" onPress={()=>router.push("/page/status_bar_page")}/>
        <Button title='ActivityIndicator' color="#00008b" onPress={()=>router.push("/page/activity_indicator_page")}/>
        <Button title='Modal' color="#00008b" onPress={()=>router.push("/page/modal_page")}/>
        <Button title='Alert' color="#00008b" onPress={() => Alert.alert('Left button pressed')}/>
        <View style={styles.divider}></View>
        <Button title='Keyboard Avoiding' color="#ff7f50" onPress={()=>router.push("/page/keyboard_avoid_view_page")}/>
        <Button title='Accessbility' color="#ff7f50"/>
        <Button title='ScrollView (This Page)' color="#ff7f50"/>
        <Button title='ListView-FlatList' color="#ff7f50" onPress={()=>router.push("/page/flat_list_page")}/>
        <Button title='ListView-SectionList' color="#ff7f50" onPress={()=>router.push("/page/section_list_page")} />
        <Button title='ListView-VirtualizedList' color="#ff7f50"/>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
