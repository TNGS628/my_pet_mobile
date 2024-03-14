/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button, Divider } from 'native-base';
import { styles } from './styles';

import { UseGlobalStyles } from '../../../theme';
import images from 'src/theme/variables';
import { useStore } from '../../../context/app.provider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppActionTypes } from 'src/context/types';
import { APP_STACK } from 'src/navigation/screenTypes';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { appDispatch } = useStore();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const pressLogin = () => {
    appDispatch({
      type: AppActionTypes.SWITCH_STACK,
      payload: APP_STACK.HOME,
    });
    // if (password && email) {
    //   axios
    //     .post(`${BACKEND_URL}/login`, {
    //       email,
    //       password,
    //     })
    //     .then(async response => {
    //       console.log(response.data);
    //       await AsyncStorage.setItem('token', response.data.token);
    //       appDispatch({
    //         type: AppActionTypes.SWITCH_STACK,
    //         payload: APP_STACK.SPLASH,
    //       });
    //     })
    //     .catch(() => {
    //       showToast('Invalid email or password', 'red');
    //     });
    // } else {
    //   showToast('Please fill in all required fields', 'orange');
    // }
  };

  const handleTapOutside = () => {
    Keyboard.dismiss();
    emailRef.current?.blur();
    passwordRef.current?.blur();
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <TouchableWithoutFeedback onPress={handleTapOutside}>
        <View style={styles.authContainer}>
          <View
            style={{
              width: '100%',
              height: 250,
              paddingTop: 40,
              marginBottom: 20,
            }}>
            <Image
              source={images.splash}
              style={{ width: '100%', height: '100%', borderRadius: 16 }}
            />
          </View>
          <View style={{ width: '100%', marginBottom: 25 }}>
            <Text
              style={{ fontSize: 30, color: '#172B47', fontWeight: 'bold' }}>
              Login
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Icon
              name="alternate-email"
              color={'#9EA3A8'}
              size={20}
              style={{ marginRight: 10, alignSelf: 'flexStart' }}
            />
            <View style={{ width: '100%', paddingRight: 30 }}>
              <TextInput
                ref={emailRef}
                value={email}
                onChangeText={setEmail}
                placeholder="Email ID"
                placeholderTextColor={'#9EA3A8'}
                autoCorrect={false}
                autoCapitalize="none"
                style={{
                  borderTopWidth: 0,
                  color: '#9EA3A8',
                  fontWeight: '600',
                }}
              />
              <Divider />
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Icon
              name="lock-outline"
              color={'#9EA3A8'}
              size={20}
              style={{ marginRight: 10, alignSelf: 'flexStart' }}
            />
            <View style={{ width: '100%', paddingRight: 30 }}>
              <TextInput
                ref={passwordRef}
                value={password}
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholderTextColor={'#9EA3A8'}
                autoCapitalize="none"
                style={{
                  borderTopWidth: 0,
                  color: '#9EA3A8',
                  fontWeight: '600',
                }}
              />
              <Divider />
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', color: '#305D99' }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            variant={'solid'}
            borderRadius={10}
            padding={3.5}
            style={{ backgroundColor: '#086cfe' }}
            onPress={pressLogin}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Login</Text>
          </Button>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{ width: '45%', height: 0.3, backgroundColor: 'grey' }}
            />
            <Text
              style={{
                color: '#9EA3A8',
                fontWeight: '500',
                marginHorizontal: 10,
              }}>
              OR
            </Text>
            <View
              style={{ width: '45%', height: 0.3, backgroundColor: 'grey' }}
            />
          </View>

          <Button
            variant={'solid'}
            borderRadius={10}
            padding={3.5}
            style={{ backgroundColor: '#F7FBFC', marginBottom: 20 }}
            onPress={pressLogin}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Image
                source={images.google}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 16,
                  marginRight: 20,
                }}
              />
              <Text style={{ color: '#858FA1', fontWeight: '600' }}>
                Login with Google
              </Text>
            </View>
          </Button>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{ marginRight: 5, color: '#9EA3A8', fontWeight: '500' }}>
              New to Pet lovers?
            </Text>
            <TouchableOpacity
              onPress={() => {
                setEmail('');
                setPassword('');
                navigation.navigate('RegisterPage');
              }}>
              <Text style={{ fontWeight: '600', color: '#305D99' }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Login;
