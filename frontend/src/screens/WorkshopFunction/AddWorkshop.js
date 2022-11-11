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

const AddWorkshop = ({navigation}) => {
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
              Add Workshop
            </Heading>
          </Center>
        </Box>

        <Center>
          <Box px={5} width={'85%'}>
            <FormControl mt={10}>
              <FormControl.Label>Workshop Name</FormControl.Label>
              <Input
                size="md"
                py={3}
                mt={3}
                placeholder="Enter your workshop name"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Category Type</FormControl.Label>
              <Select
                size="md"
                selectedValue=""
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: 'teal.600',
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Foods" value="Foods" />
                <Select.Item label="Textiles" value="Textiles" />
                <Select.Item label="Medicines" value="Medicines" />
                <Select.Item label="Flowers" value="Flowers" />
                <Select.Item label="Books" value="Books" />
              </Select>
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Description</FormControl.Label>
              <TextArea
                size="md"
                h={20}
                mt={3}
                placeholder="You can add more details here"
              />
            </FormControl>

            <FormControl mt={5}>
              <FormControl.Label>Upload Video</FormControl.Label>
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

export default AddWorkshop;
