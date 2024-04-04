import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Orderconfirm from "../screens/Orderconfirm";
import Category from "../screens/Category";
import SubCategory from "../screens/SubCategory";
import AuthStack from './AuthStack';
import Poductdetils from "../screens/Poductdetils";
import Setting from "../screens/Setting";
import Cartscreen from "../screens/Cartscreen";
import Wallet from "../screens/Wallet";
import Order from "../screens/Order";
import Search from "../screens/Search";
import Support from "../screens/Support";
import Myprofile from "../screens/Myprofile";
import AddAddress from "../screens/AddAddress";
import Aboutus from "../screens/Aboutus";
import Address from "../screens/Address";
import Product from "../screens/Product";
import GooglePlacesInput from "../screens/GooglePlacesInput";
import WalletSeeAll from "../screens/WalletSeeAll";
import Notification from "../screens/Notification";
import Payment from "../screens/Payment";
import OrderDetail from '../screens/OrderDetail'
import CheckLoc from "../screens/CheckLoc";
import Trackorder from "../screens/Trackorder";

const Stack = createNativeStackNavigator();

export default function UserStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name={"Home"} component={Home} />
            <Stack.Screen name={"CheckLoc"} component={CheckLoc} />
            <Stack.Screen name={"Orderconfirm"} component={Orderconfirm} />
            <Stack.Screen name={"Category"} component={Category} />
            <Stack.Screen name={"SubCategory"} component={SubCategory} />
            <Stack.Screen name={"OrderDetail"} component={OrderDetail} />
            <Stack.Screen name={"AuthStack"} component={AuthStack} /> 
            <Stack.Screen name={"Poductdetils"} component={Poductdetils} />
            <Stack.Screen name={"Setting"} component={Setting} />
            <Stack.Screen name={"Cartscreen"} component={Cartscreen} />
            <Stack.Screen name={"Wallet"} component={Wallet} />
            <Stack.Screen name={"Order"} component={Order} />
            <Stack.Screen name={"Search"} component={Search} />
            <Stack.Screen name={"Support"} component={Support} />
            <Stack.Screen name={"Myprofile"} component={Myprofile} />
            <Stack.Screen name={"AddAddress"} component={AddAddress} />
            <Stack.Screen name={"Address"} component={Address} />
            <Stack.Screen name={"Aboutus"} component={Aboutus} />
            <Stack.Screen name={"Product"} component={Product} />
            <Stack.Screen name={"GooglePlacesInput"} component={GooglePlacesInput} />
            <Stack.Screen name={"WalletSeeAll"} component={WalletSeeAll} />
            <Stack.Screen name={"Payment"} component={Payment} />
            <Stack.Screen name={"Notification"} component={Notification} />
            <Stack.Screen name={"Trackorder"} component={Trackorder} /> 
        </Stack.Navigator>
    );
  }
