import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);

  const calculate = () => {
    console.log('capital->', capital);
    console.log('interes->', interes);
    console.log('meses->', meses);
  };
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>

      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
});
