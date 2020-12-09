/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form() {
  const [pickerValue, setPickerValue] = useState('java');
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.inputs}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.inputs, styles.inputPercentage]}
        />
      </View>
      <Picker
        selectedValue={pickerValue}
        onValueChange={(itemValue) => setPickerValue(itemValue)}
        mode="dialog">
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  inputs: {
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});
