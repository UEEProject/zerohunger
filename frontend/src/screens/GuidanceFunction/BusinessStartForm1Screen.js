import React from 'react';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  TextArea,
  Center,
  Radio,
  Progress,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

import SweetAlert from 'react-native-sweet-alert';

const BusinessStartForm1 = ({navigation}) => {
  handleClick = () => {
    navigation.navigate('BusinessStartForm2');
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
              Let's Start Your Business
            </Heading>
            <Text bold fontSize="lg" color={'primary.50'}>
                Step 1
            </Text>
          </Center>
        </Box>

        <Progress
          mt={5}
          size="sm"
          rounded="5"
          value={35}
          mx="4"
          bg="coolGray.300"
          _filledTrack={{
            bg: 'lime.500',
          }}
        />

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your full name"
              />
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
              <FormControl.Label>How much you can invest for your business?</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your invest amount"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>What are your funding options?</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your funding option"
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

export default BusinessStartForm1;
