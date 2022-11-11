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

const BusinessStartForm3 = ({navigation}) => {
  handleClick = () => {
    SweetAlert.showAlertWithOptions(
      {
        title: 'Success',
        subTitle: 'Form Submitted',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'success',
        cancellable: true,
      },
      function () {
        navigation.navigate('CashDonationForm2');
      },
    );
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
              Step 3
            </Text>
          </Center>
        </Box>

        <Progress
          mt={5}
          size="sm"
          rounded="5"
          value={100}
          mx="4"
          bg="coolGray.300"
          _filledTrack={{
            bg: 'lime.500',
          }}
        />

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={5}>
              <FormControl.Label>
                What kind of contribution do you want from us?
              </FormControl.Label>

              <Radio.Group
                defaultValue="1"
                name="exampleGroup"
                accessibilityLabel="favorite colorscheme">
                <Radio value="1" my={1} size="sm">
                  Consulting
                </Radio>
                <Radio value="2" my={1} size="sm">
                  Finance
                </Radio>
                <Radio value="3" my={1} size="sm">
                  Other
                </Radio>
              </Radio.Group>
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>More Details</FormControl.Label>
              <TextArea
                size="md"
                h={40}
                mt={3}
                placeholder="You can describe the help that excepting from us"
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

            <Center>
              <Image
                mt={12}
                source={require('../../../images/startbusiness.png')}
                alt="main logo"
                size="2xl"
              />
            </Center>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default BusinessStartForm3;
