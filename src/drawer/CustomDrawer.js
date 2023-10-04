

import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';

const data = [ 
  {
    title: 'Notifications',
    icon:  require('../assests/notifications.png'),
    isNew: false,
     
  },
  {
    title: 'My Account',
    icon:  require('../assests/person-circle.png'),
    isNew: false,
     
  },
  {
    title: 'Brands',
    icon:  require('../assests/pricetags.png'),
    isNew: false,
     
  },
  {
    title: 'Contact Us',
    icon:  require('../assests/call.png'),
    isNew: false,
     
  },
  {
    title: 'About',
    icon:  require('../assests/information-circle.png'),
    isNew: false,
     
  },
  {
    title: 'Settings',
    icon:  require('../assests/cog.png'),
    isNew: false,
     
  },
  {
    title: 'Terms & Conditions',
    icon:  require('../assests/book.png'),
    isNew: false,
     
  },
  {
    title: 'Exit',
    icon:  require('../assests/exit-outline.png'),
    isNew: false,
     
  },
];
const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'skyblue', flex: 1}}>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: '700',
            color: '#8e8e8e',
          }}>
          NAV MENU
        </Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <CommonCard
                title={item.title}
                icon ={item.icon}
                onClick={() => { 
                  navigation.closeDrawer();
                  alert('title:' + item.title);
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;




// import "react-native-gesture-handler";
// import { View, Text, Image } from "react-native";
// // import {
// //   SimpleLineIcons,
// //   MaterialIcons,
// //   MaterialCommunityIcons,
// //   FontAwesome
// // } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";
// import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
// import img_User from "../assests/person-circle.png";
// import Categories from "./navScreens/Categories";
// import ContactUs from "./navScreens/ContactUs";
// import TnC from "./navScreens/TnC";
// import Home from "../normal/Home";
// import Settings from "./navScreens/Settings";
// import About from "./navScreens/About";


// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={
//           (props) => {
//             return (
//               <SafeAreaView>
//                 <View
//                   style={{
//                     height: 200,
//                     width: '100%',
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderBottomColor: "#f4f4f4",
//                     borderBottomWidth: 1
//                   }}
//                 >
//                   <Image
//                     source={img_User}
//                     style={{
//                       height: 130,
//                       width: 130,
//                       borderRadius: 65
//                     }}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 22,
//                       marginVertical: 6,
//                       fontWeight: "bold",
//                       color: "#111"
//                     }}
//                   >Saraf Tarsewala</Text>
//                   <Text
//                     style={{
//                       fontSize: 16,
//                       color: "#111"
//                     }}
//                   >Jewellers</Text>
//                 </View>
//                 <DrawerItemList {...props} />
//               </SafeAreaView>
//             )
//           }
//         }
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: "#fff",
//             width: 250
//           },
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontWeight: "bold"
//           },
//           drawerLabelStyle: {
//             color: "#111"
//           }
//         }}
//       >
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: "Home",
//             title: "Home",
//             icon:  require('../assests/person-circle.png'),
//             // drawerIcon: () => (
//             //   <SimpleLineIcons name="home" size={20} color="#808080" />
//             // )
//           }}
//           component={Home}
//         />
//         {/* <Drawer.Screen
//           name="Categories"
//           options={{
//             drawerLabel: "Categories",
//             title: "Categories",
//             drawerIcon: () => (
//               <MaterialIcons name="category" size={20} color="#808080" />
//             )
//           }}
//           component={Categories}
//         />
       
//         <Drawer.Screen
//           name="Settings"
//           options={{
//             drawerLabel: "Settings",
//             title: "Settings",
//             drawerIcon: () => (
//               <SimpleLineIcons name="settings" size={20} color="#808080" />
//             )
//           }}
//           component={Settings}
//         />
//        <Drawer.Screen
//           name="Contact Us"
//           options={{
//             drawerLabel: "ContactUs",
//             title: "ContactUs",
//             drawerIcon: () => (
//               <MaterialIcons name="call" size={20} color="#808080" />
//             )
//           }}
//           component={ContactUs}
//         />
//         <Drawer.Screen
//           name="About"
//           options={{
//             drawerLabel: "About",
//             title: "About",
//             drawerIcon: () => (
//               <MaterialIcons name="info" size={20} color="#808080" />
//             )
//           }}
//           component={About}
//         />

//         <Drawer.Screen
//           name="TnC"
//           options={{
//             drawerLabel: "TnC",
//             title: "TnC",
//             drawerIcon: () => (
//               <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
//             )
//           }}
//           component={TnC}
//         /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }




// import {View, Text, SafeAreaView, FlatList} from 'react-native';
// import React from 'react';
// import CommonCard from '../common/CommonCard';

// const data = [ 
//   {
//     title: 'Notifications',
//     icon:  require('../assests/notifications.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'My Account',
//     icon:  require('../assests/person-circle.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'Brands',
//     icon:  require('../assests/pricetags.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'Contact Us',
//     icon:  require('../assests/call.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'About',
//     icon:  require('../assests/information-circle.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'Settings',
//     icon:  require('../assests/cog.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'Terms & Conditions',
//     icon:  require('../assests/book.png'),
//     isNew: false,
     
//   },
//   {
//     title: 'Exit',
//     icon:  require('../assests/exit-outline.png'),
//     isNew: false,
     
//   },
// ];
// const CustomDrawer = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{backgroundColor: 'skyblue', flex: 1}}>
//         <Text
//           style={{
//             marginTop: 20,
//             marginLeft: 20,
//             fontSize: 17,
//             fontWeight: '700',
//             color: '#8e8e8e',
//           }}>
//           NAV MENU
//         </Text>
//         <FlatList
//           data={data}
//           renderItem={({item, index}) => {
//             return (
//               <CommonCard
//                 title={item.title}
//                 icon ={item.icon}
//                 onClick={() => { 
//                   navigation.closeDrawer();
//                   alert('title:' + item.title);
//                 }}
//               />
//             );
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomDrawer;
