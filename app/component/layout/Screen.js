import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


function Screen({children, style}) {
    return (
        <SafeAreaView>
            {children}
        </SafeAreaView>
    );
}


export default Screen;