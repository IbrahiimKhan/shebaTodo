import {Box, Text} from 'native-base';
import React, {type FC, type ReactElement} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

type ScrollableProps = {
  data: string[];
  selectedItem: string;
  handleItemPress: (item: string) => void;
};

export const Scrollable: FC<ScrollableProps> = ({
  data,
  handleItemPress,
  selectedItem,
}): ReactElement => {
  const handleItemClick = (item: string): void => {
    handleItemPress(item);
  };

  return (
    <Box mb={5}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Box p={1} mx={2}>
            <TouchableOpacity
              onPress={() => handleItemClick(item)}
              activeOpacity={1} // Prevent opacity change on press
            >
              <Box
                borderRadius="sm"
                bg={selectedItem === item ? 'blue.500' : 'transparent'}
                p={2}
                borderWidth={selectedItem === item ? 1 : 0}
                borderColor={
                  selectedItem === item ? 'blue.500' : 'transparent'
                }>
                <Text color={selectedItem === item ? 'white' : 'black'}>
                  {item}
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        )}
      />
    </Box>
  );
};
