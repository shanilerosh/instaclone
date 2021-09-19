import {
    Flex,
    Center,
    Heading,
    Button,
    Image,
    Spacer,
    Input,
    Box,
    NativeBaseProvider,
  } from "native-base"
import React from 'react'


export default function LoginSubComponents() {

    return (
        <Center>
             <Image
                size={"sm"}
                width={40}
                resizeMode="cover"
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
                }}
                alt={"Alternate Text "}
              />
          <Box>
            <Flex direction={"column"} h={40} w={300} mt={6}>
               <Input
               mb={4}
            variant="outline"
            placeholder="username"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
             <Input
            variant="outline"
            placeholder="password"
            type="password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
           <Button mt={2} onPress={() => console.log("hello world")}>Log In</Button>
            </Flex>
          </Box>
        </Center>);
}
