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
              Add Workshop Categories
            </Heading>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <Center>
              <Image
                mt={5}
                source={require('../../../images/addWorkshopCategories.png')}
                alt="main logo"
                size="xl"
              />
            </Center>

            <FormControl mt={5}>
              <FormControl.Label>Category Code</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your category code"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Category Name</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your category name"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Category Image</FormControl.Label>
              <Box
                mt={5}
                width={'100%'}
                height={40}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                justifyContent={'center'}
                alignItems={'center'}>
                +
              </Box>
            </FormControl>

            <Center>
              <Button
                bgColor={'primary.500'}
                width={'40%'}
                mt={12}
                size="md"
                onPress={() => this.handleClick()}>
                Add
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default CashDonationForm1Screen;
