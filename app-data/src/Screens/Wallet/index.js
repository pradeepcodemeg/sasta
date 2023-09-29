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



const Wallet = ({ navigation, route }) => {
    const [custum, setcustum] = useState(false);
    const [choosebtn, setchoosebtn] = useState('');
    const submitfun = () => {

    }
    return (
        <>
            <HeaderComp text={'My Wallet'} navigation={navigation} type={'3'} />
            <View style={{ ...StylesGloble.container, paddingTop: hp('1%'), paddingLeft: 10, paddingRight: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <ScrollView  nestedScrollEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:30}}> */}
                <ImageBackground style={{ width: '100%', height: 220 }} source={imagePath.Balance}>
                    <View style={{ width: '100%', alignItems: "center" }}>
                        <Text style={{ fontSize: 12, marginTop: 60, fontWeight: "400", color: "#FFFFFF" }}>Main balance</Text>
                        <Text style={{ fontSize: 25, marginTop: 5, fontWeight: "900", color: "#FFFFFF" }}>₹14,235.34</Text>
                    </View>

                    <View style={{ width: "100%", height: 1, backgroundColor: "#FFFFFF40", marginTop: 26 }}></View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 5 }}>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "#ffffff" }}>
                            <Text style={{ fontSize: 12, marginTop: 0, fontWeight: "400", color: "#FFFFFF" }}>Credit Left</Text>
                            <Text style={{ fontSize: 15, marginTop: 2, fontWeight: "600", color: "#FFFFFF" }}>₹14,235.34</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 12, marginTop: 0, fontWeight: "400", color: "#FFFFFF" }}>Credit Limit</Text>
                            <Text style={{ fontSize: 15, marginTop: 2, fontWeight: "600", color: "#FFFFFF" }}>₹30,235.34</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ ...StylesGloble.oneline, marginTop: -5 }}>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Add money to your wallet</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ width: "100%", height: 'auto', marginTop: 15, borderColor: "#C4C4C450", borderRadius: 8, borderWidth: 1 }}>
                    <View style={{ padding: 10 }}>
                        {
                            custum ?
                                <TextInput
                                    placeholder='₹1000'
                                    style={{width: "100%", backgroundColor: "#9DC45A10", borderRadius: 10, paddingVertical: 15,height:50,paddingLeft:20,color:"#000000"}}
                                    placeholderTextColor='#000000'
                                />
                                :
                                <View style={{ width: "100%", backgroundColor: "#9DC45A10", borderRadius: 10, paddingVertical: 15 }}>
                                <Text style={{ fontSize: 16, marginLeft: 10, color: '#000000' }}>₹1000</Text>
                            </View>
                            }
                       
                        <View style={{ ...StylesGloble.oneline, marginTop: 15, }}>
                            <TouchableOpacity onPress={()=>{ setchoosebtn('10')}} style={{ ...StylesGloble.outerborderwei,backgroundColor:choosebtn=='10'? '#9DC45A'  :"white", }}>
                                <Text style={{ fontSize: 12, color:choosebtn=='10'?   "white" : '#000000', marginLeft: 5 }}>₹10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ setchoosebtn('500')}}  style={{ ...StylesGloble.outerborderwei,backgroundColor:choosebtn=='500'? '#9DC45A'  :"white", marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color:choosebtn=='500'?  "white" : '#000000', marginLeft: 5 }}>₹500</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ setchoosebtn('1000')}} style={{ ...StylesGloble.outerborderwei,backgroundColor:choosebtn=='1000'? '#9DC45A'  :"white", marginLeft: 15 }}>
                                <Text style={{ fontSize: 12,  color:choosebtn=='1000'?  "white" : '#000000', marginLeft: 5 }}>₹1000</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ setchoosebtn('Custom');setcustum(true)}} style={{ ...StylesGloble.outerborderwei, backgroundColor:choosebtn=='Custom'? '#9DC45A'  :"white", marginLeft: 15 }} >
                                <Text style={{ fontSize: 12, color:choosebtn=='Custom'?  "white" : '#000000', marginLeft: 5 }}>Custom</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <ButtonField label={'Top Up'} submitfun={submitfun} />
                        </View>
                    </View>
                </View>

                <View style={{ ...StylesGloble.oneline, marginTop: 15, marginLeft: 5 }}>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ ...StylesGloble.listheading }}>Recent Activity</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft: "auto" }} onPress={()=>navigation.navigate('WalletSeeAll')}>
                        <Text style={{ ...StylesGloble.listviewallfont }}>See All</Text>
                    </TouchableOpacity>
                </View>
                
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
                    <View style={{ ...StylesGloble.oneline, marginTop: 25 }}>
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



export default Wallet;