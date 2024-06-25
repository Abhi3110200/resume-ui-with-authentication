import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

import SlideUp from "../component/SlideUp";
import { useNavigation } from "@react-navigation/native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const LoginScreen = () => {

  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <LinearGradient colors={["#868CFF", "#4318FF"]} style={{ flex: 1 }}>
      
        <View
          style={{
            paddingHorizontal: 20,
            marginTop:15
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: "white",
              fontWeight: "bold",
              fontFamily:'bold',
              marginTop: 15,
            }}
          >
            Salahkart
          </Text>
          <Text
            style={{
              marginLeft: 5,
              top: -7,
              fontSize: 17,
              fontWeight: 500,
              color: "#1A215A",
            }}
          >
            - Your Ultimate Career Companion!
          </Text>

          <Image
            source={require("../../assets/images/herio.png")}
            style={{
              top: -30,
              marginLeft: 130,
              width: windowWidth * 0.6,
              height: 250,
              alignSelf: "center",
              resizeMode: "cover",
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: -78,
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={true}>
            <SlideUp navigation={navigation} />
          </ScrollView>
        </View>
      
    </LinearGradient>
    </ScrollView>
  );
};

export default LoginScreen;
