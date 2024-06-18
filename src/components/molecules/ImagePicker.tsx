import {FlashList} from '@shopify/flash-list';
import {Button, FormControl, Icon, Image} from 'native-base';
import React, {FC, ReactElement, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

type ImagePickerProps = {
  initialImages?: string[];
  handleSelectedImages: (images: string[]) => void;
};

export const ImagePicker: FC<ImagePickerProps> = ({
  handleSelectedImages,
  initialImages,
}): ReactElement => {
  const [selectedImages, setSelectedImages] = useState<string[]>(
    initialImages ? initialImages : [],
  );

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
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        const imageUri = response?.uri || response.assets?.[0]?.uri;
        if (imageUri) {
          setSelectedImages(prevImages => {
            const updatedImages = [...prevImages, imageUri];
            handleSelectedImages(updatedImages);
            return updatedImages;
          });
        }
      }
    });
  };

  return (
    <>
      <FormControl.Label>Choose Media</FormControl.Label>
      {selectedImages.length < 1 ? (
        <TouchableOpacity onPress={openImagePicker}>
          <Icon
            as={Feather}
            size="10"
            name="upload"
            _dark={{
              color: 'blue.500',
            }}
            color="blue.500"
          />
        </TouchableOpacity>
      ) : (
        <>
          <FlashList
            renderItem={({item}) => (
              <Image
                mb={3}
                alt="demo images"
                resizeMode="contain"
                width={100}
                height={100}
                source={{uri: item}}
              />
            )}
            estimatedItemSize={50}
            numColumns={4}
            data={selectedImages}
          />
          <Button
            alignSelf="flex-start"
            backgroundColor="emerald.500"
            onPress={openImagePicker}>
            Add More Images
          </Button>
        </>
      )}
    </>
  );
};

export default ImagePicker;
