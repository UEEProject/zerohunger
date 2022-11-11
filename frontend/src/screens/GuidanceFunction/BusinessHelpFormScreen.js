import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  TextArea,
  Center,
  Progress,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

import SweetAlert from 'react-native-sweet-alert';

const CashDonationForm1Screen = ({navigation}) => {
  handleClick = () => {
    SweetAlert.showAlertWithOptions({
        title: 'Success',
        subTitle: 'Form Submitted',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'success',
        cancellable: true
      }, function() {
        navigation.navigate('CashDonationForm2');
      });
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
              Let's Improve Your Business
            </Heading>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>Name</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter your name" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Age</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter your age" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your phone number"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>
                Type of Business Organization
              </FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your business type"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Expectation</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can add more details here"
              />
            </FormControl>

            <Center>
              <Button
                bgColor={'primary.500'}
                width={'40%'}
                mt={12}
                size="md"
                onPress={() => this.handleClick()}>
                Submit
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default CashDonationForm1Screen;
