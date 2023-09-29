import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import HeaderComp from '../../Components/HeaderComp';
import Redeem from '../../assets/img/redeem.svg';
import Frontaerrow from '../../assets/img/frontaerrow.svg';
import Gpay from '../../assets/img/gpay.svg';



const WalletSeeAll = ({ navigation, route }) => {
    const [custum, setcustum] = useState(false)
    const submitfun = () => {

    }
    return (
        <>
            <HeaderComp text={'Recent Activity'} navigation={navigation} type={'3'} />
            <View style={{ ...StylesGloble.container, paddingTop: hp('1%'), paddingLeft: 10, paddingRight: 10, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ ...StylesGloble.oneline, marginTop: 25 }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 14, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 25, }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 12, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 25, paddingBottom: 20 }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 12, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View>
                </ScrollView>
                {/* </ScrollView> */}
            </View>

        </>
    );
};



export default WalletSeeAll;