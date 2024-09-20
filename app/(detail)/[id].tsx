import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function DetailScreen() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    //example if you want set header
    useEffect(() => {
        navigation.setOptions(
            { 
                headerShown: true,
                headerBackVisible:true,
                headerBackTitle: 'Custom Back',
                headerBackTitleVisible: false,
                title: "Detail Page",
            }
            //you can adjust above props, maybe default value. more https://reactnavigation.org/docs/native-stack-navigator
    ); 
    }, [navigation]);

    return (
        <View>
            <ThemedText type='subtitle'>Detail ID :{id}</ThemedText>
        </View>
    )
}
