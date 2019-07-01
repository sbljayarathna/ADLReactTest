import { createStackNavigator, createAppContainer } from 'react-navigation';

import Pin from 'app/features/pin/containers/PinContainer';
import PinReset from 'app/features/reset/containers/PinResetContainer';

const RNApp = createStackNavigator(
    {
        Pin: {
            screen: Pin,
            navigationOptions: { header: null }
        },
        PinReset: {
            screen: PinReset
        }
    },
    {
        initialRouteName: 'Pin'
    }
);

export default createAppContainer(RNApp);
