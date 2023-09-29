import React, { useEffect,useState } from 'react';
import { StatusBar,View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Routes from './src/Navigation/Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Store from './src/Redux/store';



const App = () => {
   
    return (
        <Provider store={Store}>
            <PaperProvider>
                <StatusBar
                    animated={true}
                    backgroundColor="#9DC45A"
                    barStyle="light-content"
                />
                <View style={{ flex: 1,backgroundColor:"#FFFFFF",width:wp('100%')}}>
                    <Routes />
                </View>
            </PaperProvider>
        </Provider>
    );
};

export default App;
