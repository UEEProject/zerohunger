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

const BusinessStartForm2 = ({navigation}) => {
  handleClick = () => {
    handleClick = () => {
      navigation.navigate('BusinessStartForm3');
    };
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
              Step 2
            </Text>
          </Center>
        </Box>

        <Progress
          mt={5}
          size="sm"
          rounded="5"
          value={65}
          mx="4"
          bg="coolGray.300"
          _filledTrack={{
            bg: 'lime.500',
          }}
        />

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>Summary of your idea (if you have any)</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can describe your ideas here"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>What are your goals?</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can describe your goals here"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>What are your skills?</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can describe your skills here"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Do you have education qualifications and any work experience?</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can describe your qualifications here"
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

export default BusinessStartForm2;
