import React, { useState } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';

const FaqComp = ({ item, index }) => {
    const [show, setshow] = useState(false)
    const [selectid,setselectid] = useState('')
    const showfunc = (id) =>{
        setselectid(id)
        setshow(!show)
    }

    return (
        <View>
            {
                show ? (item.id == selectid) &&
                    (<TouchableOpacity style={{ ...style.outerstyle, marginTop: 10, padding: 15, backgroundColor: "#9DC45A10", }} onPress={()=>setshow(false)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flex: 3 }}>
                                <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000", lineHeight: 25 }}> {item.question} </Text>
                            </View>

                            <View style={{ flex: 0.2, alignSelf: "center" }}>
                                <Image source={imagePath.Up} style={{ alignSelf: "center", height: 20, width: 20 }} />
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: "400", color: "#000000", lineHeight: 20, marginTop: 5, marginLeft: 3 }}>{item.answer}</Text>

                    </TouchableOpacity>) : (
                    <TouchableOpacity style={{ ...style.outerstyle, marginTop: 10, borderBottomWidth: 0.2, borderBottomColor: "grey", padding: 15, flexDirection: "row", justifyContent: 'space-between' }} onPress={() => showfunc(item.id)}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000", lineHeight: 25 }}> {item.question} </Text>
                        </View>
                        <View style={{ flex: 0.2, alignSelf: "center" }}>
                            <Image source={imagePath.forwordcou} style={{ alignSelf: "center" }} />
                        </View>

                    </TouchableOpacity>
                )

            }


        </View>

    );

};
const style = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    footer: {
        height: 50,
    },
    outerstyle: {
        width: "100%",
        height: "auto",
        paddingHorizontal: 5
    }
});
export default FaqComp;
