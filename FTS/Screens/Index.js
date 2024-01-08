import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Dimensions ,TouchableOpacity} from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

function Index() {
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
    <Text>Home</Text>
   </View>
  );
}

export default Index;
