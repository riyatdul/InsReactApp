import { View, StyleSheet, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  // Expo-Router use `Link` such Button in React-Native
  // if you want styling to button, use the `Pressable`, example logout button on (auth)/main_page
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type='subtitle'>Selamat Datang!</ThemedText>
        <HelloWave />
      </View>
      <Button title='Route to Components Tab' onPress={()=> router.push("/components")}/>
      
      <Link href="/explore">To Explore Page</Link>
      <Link href={{
        pathname: "/(detail)/[id]",
        params: {"id": 2}
      }}>To Detail Page</Link>
      <Link href="/(auth)/login">To Login Page</Link>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer:{
    flexDirection: 'column',
    flex:1,
    padding:24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
