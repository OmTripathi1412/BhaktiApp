import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const MobileLoginScreen = () => {
  const navigation = useNavigation();

  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Avatar.Image
          size={230}
          source={require('../../../assets/logo.jpeg')}
        />
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput
          label="mobile number"
          value={''}
          onChangeText={text => setText('')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          loading="false"
          mode="contained"
          onPress={() => navigation.navigate('OTPScreen')}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#f05d84',
  },
  logoStyle: {
    // width: '10%',
    alignSelf: 'center',
    marginTop: 50,
    // left: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
  },
  buttonStyle: {
    borderRadius: 15,
    // fontSize: 18,
    width: 210,
    backgroundColor: '#00ed57',
  },
  TextInputContainer: {
    marginTop: 40,
    padding: 20,
    // borderRadius: 25,
  },
});

export default MobileLoginScreen;
