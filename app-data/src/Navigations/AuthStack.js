import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Login,Otp,Wellcome,Addmobile,Signup,Home,Aboutus} from "../screens";
import Wellcome from "../screens/Wellcome";
import Otp from "../screens/Otp";
import Login from "../screens/Login";
import Addmobile from "../screens/Addmobile";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Aboutus from "../screens/Aboutus";
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name={'Wellcome'} component={Wellcome} />
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Otp'} component={Otp} />
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Addmobile'} component={Addmobile} />
            <Stack.Screen name={'Signup'} component={Signup} />
            <Stack.Screen name={'Aboutus'} component={Aboutus} />
            <Stack.Screen name={'UserStack'} component={UserStack} />
        </Stack.Navigator>
    );
  }
