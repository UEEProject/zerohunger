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

const DonationInitialScreen = ({navigation}) => {

  handleClickCash = () => {
    navigation.navigate('CashDonationForm1');
  };

  handleClickItem = () => {
    navigation.navigate('ItemsDonationForm1');
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
              Welcome To Divisawiya Donation Programme
            </Heading>
          </Center>
        </Box>
        <Center>
          <Image
            mt={5}
            source={require('../../../images/donationMain.png')}
            alt="main logo"
            size="lg"
          />
        </Center>
        <Box mt={7} px={5}>
          <Text fontSize="md" bold>
            Info :
          </Text>
          <Text px={5} mt={5}>
            One of the biggest challenges of our time is putting an end to world
            hunger. People in Sri Lanka have to put forth a lot of effort to
            meet their fundamental demands because of the country's economic
            crisis
          </Text>
          <Text px={5} mt={10}>
            Families encounter a problem known as food insecurity when they are
            unable to consistently purchase or obtain enough meals.
          </Text>

          <Text mt={20} fontSize="lg" bold>
            Select Donation Type :
          </Text>

          <Center>
            <Button
              bgColor={'primary.500'}
              width={'40%'}
              mt={12}
              size="md"
              onPress={() => this.handleClickCash()}>
              Cash Donation
            </Button>
            <Button
              bgColor={'primary.500'}
              width={'40%'}
              mt={10}
              size="md"
              onPress={() => this.handleClickItem()}>
              Items Donation
            </Button>
          </Center>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default DonationInitialScreen;
