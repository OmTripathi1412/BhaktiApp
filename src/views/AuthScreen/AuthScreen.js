import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const AuthScreen = () => {
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
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          // icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('MobileLoginScreen')}>
          Login using mobile number
        </Button>
        <Button
          style={[styles.buttonStyle, {marginTop: 20}]}
          // icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}>
          Login using email and password
        </Button>
      </View>
      {/* <TextInput
      label="Password"
      value={'text'}
      onChangeText={text => setText('text')}
    /> */}
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
    marginTop: 50,
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#00ed57',
    // fontSize: 18,
  },
});

export default AuthScreen;
