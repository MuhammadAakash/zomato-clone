import {View, Text} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
