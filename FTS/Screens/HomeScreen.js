import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Dimensions ,TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

function HomeScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        style={{
          height: height / 1.6
        }}
        source={require('../assets/undraw_Predictive_analytics_re_wxt8.png')}
      />
      <View style={{
        alignItems:'center',
        marginTop:hp('2')
      }}>
        <Text style={{
            fontSize:45,
            fontWeight:"bold",
        }}>Welcome!</Text>
        <Text style={{
            fontSize:20,
            fontWeight:300,
            marginTop:hp('2')
        }}>Finance with us & reap Benefits</Text>
      </View>
      <View style={{
        marginTop:hp('7'),
        alignItems:'center'
      }}>
      <TouchableOpacity style={{
        backgroundColor:'#DC143C',
        padding:20,
        width:wp('70'),
        borderRadius:35,
        alignItems:'center'
      }}
      onPress={()=>{
        props.navigation.navigate('Login');
      }}
      >
        <Text style={{
            fontSize:22,
            color:'white'
        }}>Get Started</Text>
      </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  );
}

export default HomeScreen;
