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

const ItemsDonationForm1Screen = ({navigation}) => {
  handleClick = () => {
    navigation.navigate('ItemsDonationForm3');
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
              Item Donation Form
            </Heading>
            <Text bold fontSize="lg" color={'primary.50'}>
                Pickup Details
            </Text>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>Address No</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter address no" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Street Name 01</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter street name 1" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Street Name 02</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter street name 2" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>City</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter city name" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>District</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter district name" />
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

export default ItemsDonationForm1Screen;
