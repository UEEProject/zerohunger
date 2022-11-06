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
    navigation.navigate('ItemsDonationForm2');
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
                User Details
            </Text>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>Name</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter your name" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Email</FormControl.Label>
              <Input size="md" py={3} mt={3} placeholder="Enter your email" />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>ID No</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your ID number"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Phone</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your phone number"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>More Details</FormControl.Label>
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
                Next
              </Button>
            </Center>

          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default ItemsDonationForm1Screen;
