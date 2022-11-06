import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  TextArea,
  Select,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

const CashDonationForm1Screen = ({navigation}) => {
  handleClick = () => {
    navigation.navigate('CashDonationForm2');
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bgColor={'#ffffff'}>
        <Box
          bgColor={'primary.500'}
          height={40}
          width={'100%'}
          justifyContent={'center'}>
          <Center>
            <Heading textAlign={'center'} color={'primary.50'}>
              We help bussinesses just like yours
            </Heading>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <Center>
              <Image
                mt={10}
                source={require('../../../images/login.jpg')}
                alt="main logo"
                size="xl"
              />

              <Box
                mt={8}
                alignItems={'center'}
                justifyContent={'center'}
                rounded="lg"
                overflow="hidden"
                borderColor={'primary.500'}
                borderWidth="1"
                width="100%"
                p="4"
                shadow={2}
                _text={{
                  textAlign: 'center',
                  fontSize: 'sm',
                  color: 'black',
                }}>
                If you already have a business and if you want to get an idea or
                help from us, click on the below button.
                <Button
                  bgColor={'primary.500'}
                  width={'60%'}
                  mt={8}
                  mb={5}
                  size="md"
                  onPress={() => this.handleClick()}>
                  Help for my business
                </Button>
              </Box>

              <Box
                mt={8}
                alignItems={'center'}
                justifyContent={'center'}
                rounded="lg"
                overflow="hidden"
                borderColor={'primary.500'}
                borderWidth="1"
                width="100%"
                p="4"
                shadow={2}
                _text={{
                  textAlign: 'center',
                  fontSize: 'sm',
                  color: 'black',
                }}>
                If you want to start new business and if you want an idea or
                help from us, click on the below button.
                <Button
                  bgColor={'primary.500'}
                  width={'60%'}
                  mt={8}
                  mb={5}
                  size="md"
                  onPress={() => this.handleClick()}>
                  Start new business
                </Button>
              </Box>
              <Text
              color={'primary.500'}
              mt={12}
              textAlign={'center'}>Achieve your business goals through improved user experience</Text>
            </Center>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default CashDonationForm1Screen;
