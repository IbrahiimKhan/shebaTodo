import moment from 'moment';
import {
  Badge,
  Button,
  FormControl,
  HStack,
  Icon,
  IconButton,
} from 'native-base';
import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

type DatePickerProps = {
  initialDate?: Date | null;
  handlSelectDate: (date: Date) => void;
};
export const DatePicker: FC<DatePickerProps> = ({
  handlSelectDate,
  initialDate = null,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(
    initialDate ? moment(initialDate).format('MMMM Do YYYY, h:mm:ss a') : '',
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    handlSelectDate(date);
    setSelectedDate(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
    hideDatePicker();
  };

  return (
    <>
      <FormControl.Label>Choose Expiry Time</FormControl.Label>
      <HStack alignItems="center" space={2}>
        <TouchableOpacity onPress={showDatePicker}>
          <Icon
            as={Ionicons}
            size="10"
            name="calendar"
            _dark={{
              color: 'blue.500',
            }}
            color="blue.500"
          />
        </TouchableOpacity>
        {selectedDate ? (
          <Badge variant="solid" background="blue.500" color={'white'}>
            {selectedDate}
          </Badge>
        ) : null}
      </HStack>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        mode="datetime"
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default DatePicker;
