import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons' 


import Home from './Home';
import Rates from './Rates';
import Bank from './Bank';
import Profile from './Profile';

const homePage='Home';
const profilePage='Profile';
const bankPage='BankDetails';
const ratesPage='Rates';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(){
  return (
    <Tab.Navigator
                initialRouteName={homePage}
                screenOptions={({route})=> ({
                    headerShown: false,
                    tabBarIcon:({focused,color,size})=>{
                        let iconName;
                        let rn = route.name;
                        if (rn===homePage){
                            iconName=focused? 'home' : 'home-outline';
                        }else if(rn===ratesPage){
                          iconName=focused? 'cash' : 'cash-outline';
                        }
                        else if(rn===bankPage){
                            iconName=focused? 'card' : 'card-outline';
                        }
                        else if(rn===profilePage){
                          iconName=focused? 'person-circle' : 'person-circle-outline';
                        }
                        return <Ionicons name={iconName} size = {size} color={color} />
                        
                    }, 

                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom:10 , fontSize:10},
                    style: {padding:10,height:80},

                }}
                >

                <Tab.Screen name={homePage} component={Home}/>
                <Tab.Screen name={ratesPage} component={Rates}/>
                <Tab.Screen name={bankPage} component={Bank}/>
                <Tab.Screen name={profilePage} component={Profile}/>
            </Tab.Navigator> 

   
  )
}

// import {View, Text, Image} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import Rates from './Rates';
// import Bank from './Bank';
// import Profile from './Profile';


// const Bottom = createBottomTabNavigator();
// const BottomNavigator = () => {
//   return (
//     <Bottom.Navigator>
//       <Bottom.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: tabInfo => {
//             return (
//               <Image
//                 // source={require('../checkbox.png')}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   tintColor: tabInfo.focused ? 'purple' : 'black',
//                 }}
//               />
//             );
//           },
//         }}
//       />
//       <Bottom.Screen
//         name="Rates"
//         component={Rates}
//         options={{
//           headerShown: false,
//           tabBarIcon: tabInfo => {
//             return (
//               <Image
//                 // source={require('../checkbox.png')}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   tintColor: tabInfo.focused ? 'purple' : 'black',
//                 }}
//               />
//             );
//           },
//         }}
//       />
//       <Bottom.Screen
//         name="Bank"
//         component={Bank}
//         options={{
//           headerShown: false,
//           tabBarIcon: tabInfo => {
//             return (
//               <Image
//                 // source={require('../checkbox.png')}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   tintColor: tabInfo.focused ? 'purple' : 'black',
//                 }}
//               />
//             );
//           },
//         }}
//       />
//        <Bottom.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: false,
//           tabBarIcon: tabInfo => {
//             return (
//               <Image
//                 // source={require('../checkbox.png')}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   tintColor: tabInfo.focused ? 'purple' : 'black',
//                 }}
//               />
//             );
//           },
//         }}
//       />
//     </Bottom.Navigator>
//   );
// };

// export default BottomNavigator;
