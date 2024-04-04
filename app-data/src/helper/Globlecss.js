import { StyleSheet,Dimensions } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height= Dimensions.get('window').height;
export const StylesGloble = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    },
    ScreenHorigental:{
        paddingHorizontal:hp('5%')
    },
    widthheight100:{
        alignItems:"center",
        justifyContent:"center"   
    },
    topheigth:{
        marginTop:hp('6%')
    },
    fontmedium:{
        color: '#000000',
        fontWeight: '600',
        lineHeight:20,
        fontSize: 20,
    },
    fontlarge:{
        color: '#000000',
        fontWeight: 'bold',
        lineHeight:35,
        fontSize: 35,
    },
    fontsmallsimple:{
        
        fontWeight:"400",
        color:"#666666",
        lineHeight:15,
        fontSize: 13,
    },
    fontsmall:{
        color: '#000000',
       
        lineHeight:15,
        fontSize: 13,
    },
    fontlargesmall:{
        color: '#000000',
        lineHeight:15,
        fontSize: 12,
    },
    oneline:{
       flexDirection:"row",
    },
    centerclass:{
        alignItems:"center",
        marginTop: hp('8%')
    },
    wellcomeouter:{
        position:"absolute",
        bottom:0,
        height:"auto",
        left:0
    },


    grrnbtn:{
        width:wp('40%'),
        height: hp('6%'), 
        backgroundColor:"#00A47C",
        alignItems:"center",
        justifyContent:"center"  
    },
    addcardbtn:{
        width:wp('30%'),
        height: hp('6%'),
        padding: hp('1%'), 
        borderColor:"#999999",
        borderRadius:4,
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center"  
    },
    startposition:{
        width:wp('75%'),
    },
    endposition:{
        alignItems:"flex-end",
    },
    toggleswitch:{
        flexDirection:"row",
        width: wp('90%'),
        paddingVertical:18,
        borderRadius:4,
        paddingLeft:5,
        backgroundColor:"#EEEEEE"
    },
    inactivelikebtn:{
        flexDirection:"row",
        padding: hp('2%'), 
        backgroundColor:"#e2e9d3",
        alignItems:"center",
        justifyContent:"center",
        maxWidth:wp('45%'),
        borderRadius:50
    },
    activelikebtn:{
        flexDirection:"row",
        padding: hp('2%'), 
        backgroundColor:"#9DC45A",
        alignItems:"center",
        justifyContent:"center",
        maxWidth:wp('45%'),
        borderRadius:50
    },
    inactiveliketext:{
        color: '#A7A7A8',
        lineHeight:15,
        fontWeight:"600",
        fontSize: 15,
    },
    activeliketext:{
        color: '#FFFFFF',
        lineHeight:15,
        fontWeight:"600",
        fontSize: 15,
    },
    actaddinfobtni:{
        margin:hp('1%'), 
        padding: hp('1.5%'), 
        backgroundColor:"#00D9A5",
        borderRadius:4,
        alignItems:"center",
        width:hp('15%'),
        justifyContent:"center" 
    },
    homeheaderouter:{
        width:width-30,
        marginLeft:15,
        position:"relative",
        height:hp('10%'),
        marginTop:10,
    },
    homeheaderouterpage:{
        width:width-2,
        marginLeft:15,
    },
    homeheaderprofile:{
        flexDirection:"row",
        width: wp('17%'),
        height:hp('10%'),
        position:"absolute",
        top:2,
        left:5,
        zIndex:999
    },
   
    homeheadername:{
        position:"absolute",
        top:wp('5%')+2,
        left:wp('17%')+7
    },
    homeheaderlocation:{
        position:"absolute",
        top:wp('4%'),
        right:wp('2%')
    },
    homebottom:{
        position:"absolute",
        bottom:wp('4%'),
        left:wp('5%'),
        width: wp('90%'),
        height:hp('15%'),
        flexDirection:"row"
    },
    bottomsec:{
        width: wp('30%'),
        height:hp('15%'),
        alignItems:"center",
        justifyContent:"center"
    },
    headerout:{
        flexDirection: 'row', 
        alignItems:'center', 
        backgroundColor: '#fff',
        shadowColor: "#626464",
        borderBottomColor:"#626464",
        borderBottomWidth:.1,
        elevation: 5,
        width:wp('100%'),
        height:hp('10%'),
        position:"relative"
    },
    offerhomeimage: {
        flex:1,
        width :wp('21.2%'),
        height : 100,
        alignItems:"center",
        borderRadius: 10
    },
    productView: {
        margin:5,
        height:240,
        width :170,
        alignItems:"center",
        backgroundColor: '#fff',
        shadowColor: "#626464",
        borderRadius:15,
        elevation: 2,
        flex:1,
        position:"relative"
    },
    productviewdata: {
       position:"absolute",
       bottom:10,
       left:10
    },
    productimg:{
      marginTop:5,
      width:95,
      height: 90,
      alignItems:"center",
      padding: 10,
      position: 'absolute',
    },
    addbutton:{
        position:"absolute",
        bottom:8,
        width:60,
        height: 25,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        right:7,
        zIndex:9999,
        elevation:2,
        backgroundColor:"#9DC45A"
    }, 
    listheading:{
        fontSize:16,
        fontWeight:"500",
        color:"#000000"
    },
    listviewallfont:{
        fontSize:15,
        fontWeight:"500",
        color:"#9DC45A"
    },
    
    catView: {
        padding:0,
        margin:4,
        backgroundColor:"#ffffff",
        height:110,
        alignItems:"center",
        elevation: 2,
        flex:1,
        position:"relative",
        borderRadius:0
    }, 
    searchcatbtn:{
        flexDirection:"row",
        padding:5, 
        alignItems:"center",
        justifyContent:"center",
        width:wp('29%'),
        backgroundColor:"#F5F9EF",
        borderRadius:5
    },
    searchcattext:{
        color: '#A7A7A8',
        lineHeight:15,
        fontWeight:"600",
        fontSize: 12,
    },
    outerborderwei:{
        borderColor:"#c4c4c450",
        borderWidth:2,
        borderRadius:50,
        padding:7,
        paddingHorizontal:20,
        marginLeft:5,
        alignItems:"center",
        justifyContent:"center"
    },
    cyheckouterborderwei:{
        borderColor:"#9DC45A",
        borderWidth:2,
        borderRadius:50,
        padding:7,
        paddingHorizontal:20,
        marginLeft:5,
        alignItems:"center",
        justifyContent:"center"
    },
    outerborderwei2:{
        borderColor:"#c4c4c450",
        borderWidth:2,
        borderRadius:50,
        padding:7,
        paddingHorizontal:20,
        // marginLeft:15,
        alignItems:"center",
        justifyContent:"center"
    },
    outerborderwei3:{
        borderColor:"#c4c4c450",
        borderWidth:2,
        borderRadius:50,
        padding:1,
        paddingHorizontal:8,
        marginLeft:2,
        alignItems:"center",
        justifyContent:"center"
    },
    sidebarlistview:{
        flexDirection:"row",
        padding:20,
        paddingHorizontal:35,
        marginHorizontal:0,
        // borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:"#9D9D9D20",
        borderBottomWidth:1

    },
    helptrachbtn:{
        position:"absolute",
        top:15,
        right:25
    },
    tabbarse:{
        height:60,
        position:"absolute",
        bottom:0,
        left:0,
        width:wp('100%'),
        backgroundColor:"#ffffff",
       
        
    },
    bottomsec:{
        width:wp('25%'),
        alignItems:"center",
    },
    locationnotaviable:{
        marginTop:"20%",
        height:"80%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
    
    
    

    
});