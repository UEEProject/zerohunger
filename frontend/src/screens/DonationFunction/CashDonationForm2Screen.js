import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  TextArea,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

const CashDonationForm2Screen = ({navigation}) => {
  handleClickCash = () => {
    navigation.navigate('Login');
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
              Upload Slip
            </Heading>
          </Center>
        </Box>

        <Center>
          <Box mt={10} px={5} width={'90%'}>
            <Text fontSize="lg" bold>
              Upload your bank slip to here :
            </Text>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default CashDonationForm2Screen;
