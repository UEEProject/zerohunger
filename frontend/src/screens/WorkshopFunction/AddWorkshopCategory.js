import React from 'react';
import {useState, useEffect} from 'react';
import {View, Platform, TouchableOpacity,StyleSheet,} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  TextArea,
  Center,
  FormControl,
  ScrollView,
  Input,
  NativeBaseProvider,
} from 'native-base';

const CashDonationForm1Screen = ({navigation}) => {
  const [code, setCategoryCode] = useState('');
  const [name, setCategoryName] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState('');
  const [singleFile, setSingleFile] = useState(null);

  handleClick = () => {
    //navigation.navigate('CashDonationForm2');
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  const validate = () => {
    console.log(code.code);
    console.log(name.name);
    // if (formData.name === undefined) {
    //   setErrors({ ...errors,
    //     name: 'Name is required'
    //   });
    //   return false;
    // } else if (formData.name.length < 3) {
    //   setErrors({ ...errors,
    //     name: 'Name is too short'
    //   });
    //   return false;
    // }

    return true;
  };

  const uploadImage = async () => {
    // Check if any file is selected or not

    if (singleFile != null) {
      // If file selected then create FormData

      const fileToUpload = singleFile;

      const data = new FormData();

      data.append('name', 'Image Upload');

      data.append('file_attachment', fileToUpload);

      // Please change file upload URL

      let res = await fetch(
        'http://localhost/upload.php',

        {
          method: 'post',

          body: data,

          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        },
      );

      let responseJson = await res.json();

      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert

      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file

    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick

        type: [DocumentPicker.types.allFiles],

        // There can me more options as well

        // DocumentPicker.types.allFiles

        // DocumentPicker.types.images

        // DocumentPicker.types.plainText

        // DocumentPicker.types.audio

        // DocumentPicker.types.pdf
      });

      // Printing the log realted to the file

      console.log('res : ' + JSON.stringify(res));

      // Setting the state to show single file attributes

      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);

      // Handling any exception (If any)

      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection

        alert('Canceled');
      } else {
        // For Unknown Error

        alert('Unknown Error: ' + JSON.stringify(err));

        throw err;
      }
    }
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

        <ScrollView w={['500']} h="300">
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

              <FormControl mt={5} isRequired>
                <FormControl.Label>Category Code</FormControl.Label>
                <Input
                  size="md"
                  py={3}
                  mt={3}
                  placeholder="Enter your category code"
                  onChangeText={value => setCategoryCode({code, code: value})}
                />
              </FormControl>

              <FormControl mt={5} isRequired>
                <FormControl.Label>Category Name</FormControl.Label>
                <Input
                  size="md"
                  py={3}
                  mt={3}
                  placeholder="Enter your category name"
                  onChangeText={value => setCategoryName({name, name: value})}
                />
              </FormControl>

              <FormControl mt={5} isRequired>
                <FormControl.Label>Category Image</FormControl.Label>
                {previewSource ? (
                  <Image
                    src={previewSource}
                    alt="preview"
                    className="previewImgProduct"
                  />
                ) : (
                  <Image
                    src="/images/imageIcon.png"
                    className="previewImgProduct"
                    alt="product pic"
                  />
                )}
                {/* <Input
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
              </Input> */}
                <Input id="profilepic" name="profilepic" type="file" />

                <Button
                  className="image_upload_button"
                  variant="contained"
                  component="span">
                  &nbsp; Upload Image
                </Button>
              </FormControl>

              {/*Showing the data of selected Single file*/}

              {singleFile != null ? (
                <Text style={styles.textStyle}>
                  File Name: {singleFile.name ? singleFile.name : ''}
                  {'\n'}
                  Type: {singleFile.type ? singleFile.type : ''}
                  {'\n'}
                  File Size: {singleFile.size ? singleFile.size : ''}
                  {'\n'}
                  URI: {singleFile.uri ? singleFile.uri : ''}
                  {'\n'}
                </Text>
              ) : null}

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Select File</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={uploadImage}>
                <Text style={styles.buttonTextStyle}>Upload File</Text>
              </TouchableOpacity>

              <Center>
                <Button
                  bgColor={'primary.500'}
                  width={'40%'}
                  mt={12}
                  mb={5}
                  size="md"
                  onPress={() => this.handleClick()}>
                  Add
                </Button>
              </Center>
            </Box>
          </Center>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

export default CashDonationForm1Screen;
