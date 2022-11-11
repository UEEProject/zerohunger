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
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);

  handleClick = () => {
    navigation.navigate('DonationInitial');
  };

  const validate = () => {
    if (formData.email === undefined) {
      setErrors({...errors, email: 'Email is required'});
      return false;
    } else if (formData.pass === undefined) {
      setErrors({...errors, pass: 'Password is required'});
      return false;
    }
    setErrors({});
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
    console.log(formData);
    if (validate() === true) {
      navigation.navigate('DonationInitial');
    }
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
            <FormControl isRequired isInvalid={'email' in errors} mt={10}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={5}
                placeholder="Enter your email"
                onChangeText={value => setData({...formData, email: value})}
              />
              <FormControl.ErrorMessage>
                Email Required
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={'pass' in errors} mt={10}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                size="md"
                py={3}
                mt={5}
                placeholder="Enter your password"
                onChangeText={value => setData({...formData, pass: value})}
              />
              <FormControl.ErrorMessage>
                Password Required
              </FormControl.ErrorMessage>
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
                onPress={onSubmit}>
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
