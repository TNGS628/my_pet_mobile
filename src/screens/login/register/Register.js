/* eslint-disable react-native/no-inline-styles */
// import libraries
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
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import images from 'src/theme/variables';
import Calculator from 'src/utils/calculator';

// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import axios from 'axios';
// import {BACKEND_URL} from '@env';
// import showToast from '../../../utils/showToast';

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const pressRegister = async () => {
    if (password && email && name) {
      axios
        .post(`${BACKEND_URL}/signup`, {
          email,
          password,
          name,
        })
        .then(() => {
          showToast('Successfully signed up!', '#5cb85c');
          setTimeout(() => {
            goToLogin();
          }, 1500);
        })
        .catch(() => {
          showToast('Something went wrong!', 'red');
        });
    } else {
      showToast('Please fill in all required fields', 'orange');
    }
  };

  const handleTapOutside = () => {
    Keyboard.dismiss();
    emailRef.current?.blur();
    passwordRef.current?.blur();
    nameRef.current?.blur();
  };

  const goToLogin = () => {
    setEmail('');
    setPassword('');
    setName('');
    navigation.navigate('LoginPage');
  };
  

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <TouchableWithoutFeedback onPress={handleTapOutside}>
        <View style={styles.authContainer}>
          <View
            style={styles.imageContainer}>
            <Image
              source={images.petlogo}
              style={ styles.loginImage}
            />
          </View>
          <View style={{ width: '100%', marginBottom: 25 }}>
            <Text
              style={{ fontSize: 30, color: '#172B47', fontWeight: 'bold', paddingTop: Calculator(45) }}>
              Бүртгүүлэх
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Icon
              name="fingerprint"
              color={'#9EA3A8'}
              size={20}
              style={{ marginRight: 10 }}
            />
            <View style={{ width: '100%', paddingRight: 30 }}>
              <View style={styles.textInputBorder}>
              <TextInput
                ref={nameRef}
                value={name}
                onChangeText={setName}
                placeholder="Овог нэр"
                placeholderTextColor={'#9EA3A8'}
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  borderTopWidth: 0,
                  color: '#9EA3A8',
                  fontWeight: '600',
                }}
              />
            </View>
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
              style={{ marginRight: 10 }}
            />
            <View style={{ width: '100%', paddingRight: 30 }}>
              <View style={styles.textInputBorder}>
              <TextInput
                ref={passwordRef}
                value={password}
                onChangeText={setPassword}
                placeholder="Нууц үг"
                secureTextEntry={true}
                placeholderTextColor={'#9EA3A8'}
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

          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 20,
            }}>
            <Text style={{ fontWeight: '500', color: '#9EA3A8', fontSize: 13 }}>
              Та бүртгүүлснээр бидний{' '}
            </Text>
            <Text style={styles.textStyle}>
              Үйлчилгээний нөхцөл{' '}
            </Text>
            <Text style={{ fontWeight: '500', color: '#9EA3A8', fontSize: 13 }}>
              болон{' '}
            </Text>
            <Text style={styles.textStyle}>
              Нууцлалын гэрээг зөвшөөрч байна.
            </Text>
          </TouchableOpacity>

          <Button
            variant={'solid'}
            borderRadius={10}
            padding={3.5}
            style={{ backgroundColor: '#086cfe' }}
            onPress={pressRegister}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Үргэлжлүүлэх</Text>
          </Button>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{ marginRight: 5, color: '#9EA3A8', fontWeight: '500' }}>
              Бүртгэлтэй хаяг байгаа бол
            </Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={{ fontWeight: '600', color: '#305D99' }}>Нэвтрэх</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default RegisterPage;
