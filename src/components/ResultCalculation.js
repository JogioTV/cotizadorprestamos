import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props) {
  const {capital, interes, total, errorMessage} = props;
  return (
    <View style={styles.content}>
      {total && <Text>RESULT TOTAL</Text>}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    marginTop: 100,
    marginHorizontal: 40,
  },
});
