import { Box, Center, NativeBaseProvider } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import LoginSubComponents from './LoginSubComponents'

export default function LoginMain() {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <LoginSubComponents />
            </Center>
      </NativeBaseProvider>
    )
}
