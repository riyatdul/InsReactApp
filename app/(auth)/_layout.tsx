import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name='login'/>
      <Stack.Screen name='main_page' />
    </Stack>
  )
}
