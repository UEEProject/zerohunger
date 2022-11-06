import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base';

const SplashScreen = ({navigation}) => {
  handleClick = () => {
    navigation.navigate('Login');
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} px="3" bgColor={'#F7F6F4'}>
        <Center>
          <Heading fontSize="5xl" color={'primary.500'} mt={20} mb={12}>
            UEE Mobile APP
          </Heading>
          <Image
            mt={20}
            mb={12}
            source={require('../../images/mainLogo.jpg')}
            alt="main logo"
            size="2xl"
          />
          <Button
            bgColor={'primary.500'}
            px={20}
            mt={20}
            size="lg"
            onPress={() => this.handleClick()}>
            Get Started
          </Button>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export default SplashScreen;
