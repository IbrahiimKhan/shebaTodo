import {FormControl, Icon, IconButton} from 'native-base';
import React, {FC, ReactElement, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';

type ImagePickerProps = {
  handleSelectedImages: (images: string[]) => void;
};
export const ImagePicker: FC<ImagePickerProps> = ({
  handleSelectedImages,
}): ReactElement => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.error) {
        console.log('Image picker error: ', response?.error);
      } else {
        let imageUri = response?.uri || response.assets?.[0]?.uri;
        if (imageUri) {
          setSelectedImages([...selectedImages, imageUri]);
        }
        handleSelectedImages(selectedImages);
      }
    });
  };

  return (
    <>
      <FormControl.Label>Choose Media</FormControl.Label>
      {selectedImages.length < 1 ? (
        <IconButton
          onPress={openImagePicker}
          variant="outline"
          icon={
            <Icon
              as={Feather}
              size="10"
              name="upload"
              _dark={{
                color: 'blue.500',
              }}
              color="blue.500"
            />
          }
        />
      ) : (
        <FlashList
          renderItem={({item}) => {
            return (
              <Image
                mb={3}
                alt="demo images"
                resizeMode="contain"
                width={100}
                height={100}
                source={{uri: item}}
              />
            );
          }}
          estimatedItemSize={50}
          numColumns={4}
          data={selectedImages}
        />
      )}
    </>
  );
};

export default ImagePicker;
