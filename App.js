// import { StyleSheet, Image, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { EvilIcons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// export default function App() {
//   return (
//     <SafeAreaView
//       style={{
//         paddingHorizontal: 20,
//         top: 20,
//         backgroundColor: "#F4F7FE",
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           marginTop: 15,
//           display: "flex",
//           alignContent: "flex-start",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <View>
//           <EvilIcons name="navicon" size={35} color="#A3AED0" />
//         </View>

//         <View
//           style={{
//             marginLeft: 65,
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 28,
//               fontWeight: 700,
//               color: "#4318FF",
//             }}
//           >
//             Salahkart
//           </Text>
//           <Text
//             style={{
//               fontSize: 12,
//               fontWeight: 500,
//               top: -5,
//               color: "#4318FF",
//             }}
//           >
//             Finding job made esay!
//           </Text>
//         </View>
//       </View>

//       <View
//         style={{
//           marginTop: 20,
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <View>
//           <Text
//             style={{
//               fontWeight: 500,
//               color: "#707EAE",
//             }}
//           >
//             Hello Pulkit,
//           </Text>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: "bold",
//             }}
//           >
//             Welcome to{" "}
//             <Text
//               style={{
//                 color: "#4318FF",
//               }}
//             >
//               Salahkart
//             </Text>
//           </Text>
//         </View>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: 28,
//             height: 25,
//             marginTop: 5,
//           }}
//         >
//           <Image source={require("./assets/images/sear.png")} />
//           <Image source={require("./assets/images/notification.png")} />
//         </View>
//       </View>

//       <View
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignContent: "flex-start",
//           marginVertical: 5,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 33,
//             fontWeight: "700",
//             color: "#1B2559",
//           }}
//         >
//           Resume{" "}
//           <Text
//             style={{
//               color: "#4318FF",
//             }}
//           >
//             Score Check
//           </Text>
//         </Text>

//         <View
//           style={{
//             backgroundColor: "#FFFFFF",
//             width: "100%",
//             height: 120,
//             borderRadius: 28,
//             marginTop: 10,
//             display: "flex",
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 0,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 2,

//             elevation: 7,
//           }}
//         >
//           <View
//             style={{
//               padding: 20,
//               display: "flex",
//               alignItems: "center",
//               flexDirection: "row",
//               marginTop: 7,
//             }}
//           >
//             <LinearGradient
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               colors={["#868CFF", "#4318FF"]}
//               style={{
//                 height: 68,
//                 width: 68,

//                 borderRadius: 50,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Image source={require("./assets/images/upload.png")} />
//             </LinearGradient>

//             <View
//               style={{
//                 marginLeft: 15,
//                 alignContent: "flex-start",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 16,
//                   color: "#A3AED0",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Check Score
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 19,
//                   fontWeight: 700,
//                   color: "#1B2559",
//                   lineHeight: 31,
//                   textDecorationLine: "underline",
//                 }}
//               >
//                 Re-Upload Resume
//               </Text>
//             </View>

//             <Image
//               source={require("./assets/images/Graph.png")}
//               style={{
//                 zIndex: 10,
//                 width: 45,
//                 height: 90,
//                 position: "absolute",
//                 right: 0,
//                 top: -4,
//                 resizeMode: "contain",
//               }}
//             />
//           </View>
//         </View>

//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           colors={["#868CFF", "#4318FF"]}
//           style={{
//             height: 144,
//             width: "100%",
//             marginTop: 20,
//             borderRadius: 28,
//           }}
//         >

//         </LinearGradient>
//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           colors={["#868CFF", "#4318FF"]}
//           style={{
//             height: 144,
//             width: "100%",
//             marginTop: 20,
//             borderRadius: 28,
//           }}
//         ></LinearGradient>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({});

import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { useFonts } from "expo-font";
export default function App() {
  let [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/DMSans-Regular.ttf'),
    'bold': require('./assets/fonts/DMSans-Bold.ttf'),
    'medium':require('./assets/fonts/DMSans-Medium.ttf'),
    'semibold': require('./assets/fonts/DMSans-SemiBold.ttf')
  });

  if(!fontsLoaded){
    return <View><Text>Loading...</Text></View>
  }
  return <AppNavigator />;
}
