// import { text } from 'body-parser';
import React, { useState } from 'react';
import { Text,Alert,View, TextInput, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Register({ navigation }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const headers={
    'Accept':'application/json',
    'Content-Type':'application/json'
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.43.192:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // Log the response status and additional information
        console.error(`HTTP error! Status: ${response.status}`);
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        throw new Error('Registration failed');
      }
  
      // Assuming a successful registration returns a specific response, adjust this based on your server response
      const responseData = await response.json();
      console.log('Response:', responseData);
  
      if (response.status >= 200 && response.status < 300) {
        // Registration is successful
  
        // Extract token from the response data
        const { token } = responseData;
  
        // Store the token in AsyncStorage
        await AsyncStorage.setItem('authToken', token);

        
      // Retrieve the token from AsyncStorage
      const storedToken = await AsyncStorage.getItem('authToken');
      console.log('Stored Token:', storedToken);
  
        Alert.alert('Success', 'Registration is successful', [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the home page
              navigation.navigate('Index');
            },
          },
        ]);
      } else {
        // Registration is unsuccessful
        Alert.alert('Error', 'Registration is unsuccessful');
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'An error occurred while processing your request');
    }
  };
  
return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'white'
    }}>
      <ImageBackground
        style={{
          height: height / 3
        }}
        source={require('../assets/undraw_Finance_re_gnv2.png')}
      />

      <View style={{
        marginTop: hp('10'),
        paddingHorizontal: wp('10')
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20
        }}>Register to your Account</Text>
        <View style={{
          marginTop: hp('5')
        }}>
          <View>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'username'}
              placeholderColor='#c4c3cb'
              onChangeText={(text) => handleInputChange('username', text)}
              value={formData.username}
              
            />
          </View>
          <View style={{
            marginTop: hp('2')
          }}>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'email'}
              placeholderColor='#c4c3cb'
              onChangeText={(email) => handleInputChange('email', email)}
              value={formData.email}
            />
          </View>
          <View style={{
            marginTop: hp('2')
          }}>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'password'}
              placeholderColor='#c4c3cb'
              onChangeText={(password) => handleInputChange('password', password)}
              value={formData.password}
            />
          </View>

          <View style={{
            marginTop: hp('3')
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#DC143C',
              padding: 20,
              borderRadius: 35,
              alignItems: 'center'
            }}
            onPress={handleSubmit}
            >
              <Text style={{
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold'
              }}>Register </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View style={{
        marginTop: hp('1')
      }}>
        <Text style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 15
        }}>Already have an Account? <Text style={{ color: '#DC143C', fontSize: 18 , textDecorationLine: 'underline'}} onPress={()=>{
            navigation.navigate('Login')
        }}>Login</Text>
        <Text style={{ color: 'blue', fontSize: 18 , textDecorationLine: 'underline'}} onPress={()=>{
            navigation.navigate('OtpScreen')
        }}>OTP</Text>
        
        </Text>

      </View>

    </SafeAreaView>
  )
}

export default Register;
