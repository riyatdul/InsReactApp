import { View, Text, StyleSheet, SwitchProps, SwitchChangeEvent, Switch } from 'react-native'
import React, { useState } from 'react'

export default function SwitchPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text>Enable Feature:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <CustomSwitch label='Switch One'/>
      <CustomSwitch label='Switch Two'/>
    </View>
  )
}

export type CustomSwitchProps = SwitchProps &{
    label:string,
}

export function CustomSwitch ({label}:CustomSwitchProps) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };
    return (
        <View style={styles.container}>
            <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <Text>{label}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})