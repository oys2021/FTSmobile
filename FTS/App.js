import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OtpScreen from './Screens/OtpScreen';
import Index from './Screens/Index';
import Budget from './Screens/Budget';
import Statistics from './Screens/Statistics';
import Profile from './Screens/Profile';
import { View,Text, Platform} from 'react-native';
import Transactions from './Screens/Transactions';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// Create Stack Navigator for screens other than the home screen
const Stack = createStackNavigator();

// Create Tab Navigator for the home screen
const Tab = createBottomTabNavigator();
const screenoptions={
tabBarShowLabel:false,
headerShown:false,
tabBarStyle:{
  position:'absolute',
  bottom:0,
  right:0,
  left:0,
  elevation:0,
  height:60,
  background:'#fff'
}
}
// Home Tab Navigator
const HomeTabNavigator = () => (
  <Tab.Navigator screenOptions={screenoptions}>
    <Tab.Screen name="Index" component={Index} options={{tabBarIcon:()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center'}}>
     {/* <Text></Text> */}
     <Entypo name="home" size={24} color="#DC143C" />
     <Text style={{color:'black',fontSize:12}}>HOME</Text>
      </View>
    )
    }}}/>
    <Tab.Screen name="Budget" component={Budget} options={{tabBarIcon:()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center'}}>
     {/* <Text></Text> */}
     <Entypo name="wallet" size={24} color="#DC143C" />
     <Text style={{color:'black',fontSize:12}}>BUDGET</Text>
      </View>
    )
    }}} />
    <Tab.Screen name="Transactions" component={Transactions}  options={{tabBarIcon:()=>{
    return(
      <View style={{
        width:Platform.OS=="ios"? 50 : 60,
        height:Platform.OS=="ios"? 50 : 60,
        top:Platform.OS=="ios"? -19 : -30,
        borderRadius:Platform.OS=="ios"? 25 : 30,
        backgroundColor:'#DC143C',
        alignItems:'center',justifyContent:'center'}}>
     {/* <Text></Text> */}
     <FontAwesome name="exchange" size={24} color="#fff" />
      </View>
    )
    }}}/>
    <Tab.Screen name="Statistics" component={Statistics} options={{tabBarIcon:()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center'}}>
     {/* <Text></Text> */}
     <Ionicons name="stats-chart" size={24} color="#DC143C" />
     <Text style={{color:'black',fontSize:12}}>STATISTICS</Text>
      </View>
    )
    }}} />
    <Tab.Screen name="Profile" component={Profile}  options={{tabBarIcon:()=>{
    return(
      <View style={{alignItems:'center',justifyContent:'center'}}>
     {/* <Text></Text> */}
     <Ionicons name="person-circle" size={24} color="#DC143C" />
     <Text style={{color:'black',fontSize:12}}>PROFILE</Text>
      </View>
    )
    }}}/>
    {/* Add more tab screens as needed */}
  </Tab.Navigator>
);

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Stack Screen 1: Home (with Tab Navigator) */}
        <Stack.Screen name="Index" component={HomeTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Budget" component={HomeTabNavigator} 
        options={{ headerShown: false,
        }}
         />
        <Stack.Screen name="Statistics" component={HomeTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={HomeTabNavigator} options={{ headerShown: false }} />

        {/* Stack Screen 2: Login */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>

        {/* Stack Screen 3: Profile */}
        <Stack.Screen name="OtpScreen" component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
