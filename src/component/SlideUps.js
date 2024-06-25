import { View, Text,TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function SlideUps({navigation}) {
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit= async ()=>{
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth,email,password);
      }
      catch(err){
        console.log(err.message);
      }
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <View
        style={{
          top: -5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#4318FF",
          }}
        >
          Salahkart
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            top: -5,
            color: "#4318FF",
          }}
        >
          Finding job made esay!
        </Text>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 21,
          fontWeight: 500,
          color: "#1B2559",
        }}
      >
        Welcome, Get Started!
      </Text>

      <View style={{
        marginTop:10
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 10,
            color:'#1B2559'
          }}
        >
          Sign Up
        </Text>

        <TextInput
          type="text"
          placeholder="Full Name"
          placeholderTextColor="#49517A"
          
          style={{
            width: "100%",
            height: 25,
            fontSize: 15,
            marginTop: 10,
            borderBottomColor: "#ECEBEB",
            borderBottomWidth: 1,
            color:'#1B2559'
            
          }}
        />
        <TextInput
          type="email"
          placeholder="Email Address"
          value={email}
          onChangeText={value=>setEmail(value)}
          placeholderTextColor="#49517A"
          style={{
            width: "100%",
            height: 25,
            fontSize: 15,
            marginTop: 20,
            borderBottomColor: "#ECEBEB",
            borderBottomWidth: 1,
            color:'#1B2559'
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            type="password"
            placeholder="Password"
            placeholderTextColor="#49517A"
            
            value={password}
            onChangeText={value=>setPassword(value)}
            secureTextEntry={!showPassword}
            style={{
              width: "100%",
              height: 25,
              fontSize: 15,
              marginTop: 20,
              lineHeight: 24,
              borderBottomColor: "#ECEBEB",
              borderBottomWidth: 1,
              flex: 1,
              color:'#1B2559'
            }}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye" : "eye-off"}
            size={18}
            color="#1B2559"
            style={{
              position: "absolute",
              right: 10,
              top: 20,
              opacity: 0.5,
            }}
            onPress={toggleShowPassword}
          />
        </View>

        {/* <LinearGradient
              colors={["#868CFF", "#4318FF"]}
              useAngle={true}
              angle={180}
            >

                <TouchableOpacity style={{
                    borderRadius:20,
                    alignItems:'center',
                    justifyContent:'center',
                    padding:10,
                    borderRadius:100,
                }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      textAlign: "center",
                      
                    }}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
            </LinearGradient> */}

        <TouchableOpacity
            onPress={handleSubmit}
          style={{
            marginTop: 40,
          }}
        >
          <LinearGradient
            colors={["#868CFF", "#4318FF"]}
            useAngle={true}
            angle={120}
            style={{
              borderRadius: 10,
              height: 40,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Create Account
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            marginTop: 25,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 24,
            color: "#1B2559",
          }}
        >
          - OR -
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#DAD7D7",
                borderWidth: 1,
                padding: 9,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/images/google.png")}
                style={{
                  height: 18,
                  width: 18,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: "#1B2559",
                  opacity: 0.54,
                }}
              >
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#DAD7D7",
                borderWidth: 1,
                padding: 9,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/images/linkedin.png")}
                style={{
                  height: 16,
                  width: 16,
                  resizeMode: "cover",
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: "#1B2559",
                  opacity: 0.54,
                }}
              >
                Sign up with Linkedin
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
            gap: 2,
            marginBottom:18
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#1B2559",
              lineHeight: 24,
              fontWeight: 400,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('login')}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#4318FF",
                fontWeight: 400,
                textDecorationLine: "underline",
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
            display: "flex",
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
            
        }}>
            <Text style={{
                fontSize:12,
                color:'#49517A'
            }}>Terms & Conditions | </Text>
            <Text style={{
                fontSize:12,
                color:'#49517A'
            }}>Privacy Policy | </Text>
            <Text style={{
                fontSize:12,
                color:'#49517A'
            }}>Contact Us</Text>
        </View>


        
      </View>
    </View>
  )
}