import React from 'react';
import { Text, View, TextInput, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

function Login({ navigation }) {
  const goToSignup = () => {
    navigation.navigate('Register'); // Replace 'Register' with the actual name of your signup page
  };

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'white'
    }}>
      <ImageBackground
        style={{
          height: height / 3
        }}
        source={require('../assets/undraw_Savings_re_eq4w.png')}
      />

      <View style={{
        marginTop: hp('10'),
        paddingHorizontal: wp('10')
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20
        }}>Login to your Account</Text>
        <View style={{
          marginTop: hp('5')
        }}>
          <View>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#eaeaea",
            }}
              placeholder={'username'}
              placeholderColor="#c4c3cb"
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
              borderColor: "#eaeaea",
            }}
              placeholder={'password'}
              placeholderColor="#c4c3cb"
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
            >
              <Text style={{
                fontSize: 22,
                color: 'white',
                fontWeight: "bold"
              }}>Login </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View style={{
        marginTop: hp('4')
      }}>
        <Text style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 15
        }}>Don't have an Account? <Text style={{ color: 'red', fontSize: 18, textDecorationLine: 'underline' }} onPress={goToSignup}>Signup</Text></Text>
      </View>

    </SafeAreaView>
  );
}

export default Login;
