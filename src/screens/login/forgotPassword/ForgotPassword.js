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
import Calculator from 'src/utils/calculator';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
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
          <View style={styles.loginImageView}>
            <Image source={images.splash} style={styles.loginImage} />
          </View>
          <View style={{ width: '100%', marginBottom: 25 }}>
            <Text
              style={{
                fontSize: 30,
                color: '#172B47',
                fontWeight: 'bold',
                paddingTop: Calculator(60),
              }}>
              Нууц үг мартсан
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
              style={{ marginRight: 10 }}
            />
            <View style={{ width: '100%', paddingRight: 30 }}>
              <View style={styles.textInputBorder}>
                <TextInput
                  ref={emailRef}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="И-Мэйл хаяг"
                  placeholderTextColor={'#9EA3A8'}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{
                    borderTopWidth: 0,
                    color: '#9EA3A8',
                    fontWeight: '600',
                  }}
                />
              </View>
            </View>
          </View>
          <Button
            variant={'solid'}
            borderRadius={10}
            padding={3.5}
            style={{ backgroundColor: '#086cfe' }}
            onPress={() => {
              navigation.navigate('LoginPage');
            }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              Үргэлжлүүлэх
            </Text>
          </Button>
          {/* <Divider /> */}
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
                Google хаягаар нэвтрэх
              </Text>
            </View>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default ForgotPassword;
