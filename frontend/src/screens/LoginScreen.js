import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

const LoginScreen = ({navigation}) => {
  handleClick = () => {
    navigation.navigate('DonationInitial');
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} px="3" bgColor={'#ffffff'}>
        <Center>
          <Image
            mt={10}
            source={require('../../images/login.jpg')}
            alt="main logo"
            size="2xl"
          />
          <Heading fontSize="3xl" color={'primary.500'} mt={5}>
            Login
          </Heading>
          <Box width={'75%'}>

            <FormControl mt={10}>
              <FormControl.Label>Email</FormControl.Label>
              <Input size="md" py={3} mt={5} placeholder="Enter your email" />
            </FormControl>

            <FormControl mt={10}>
              <FormControl.Label>Password</FormControl.Label>
              <Input size="md"py={3} mt={5} placeholder="Enter your password" />
            </FormControl>

            <Center>
              <Text mt={10}>
                Don't have an account?{' '}
                <Text color={'primary.500'}>Register</Text>
              </Text>
            </Center>

            <Center>
              <Button
                bgColor={'primary.500'}
                width={'50%'}
                mt={20}
                size="lg"
                onPress={() => this.handleClick()}>
                Login
              </Button>
            </Center>

          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
