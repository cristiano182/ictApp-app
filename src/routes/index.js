import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'

import ChatScreen from "../screens/chat/index"
import ColecaoScreen from "../screens/colecao/index"
import ColecaoListaScreen from "../screens/colecaoLista/index"
import LoginScreen from "../screens/login/index"
import RegistrarScreen from "../screens/registrar/index"
import UploadScreen from "../screens/upload/index"

const Tab = createMaterialTopTabNavigator({
    Chat: { screen: ChatScreen },
    Colecao: { screen: ColecaoScreen },
},
    {
        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
                fontSize: 11,
            },
            tabStyle: {
                height: 30,
            },
            style: {
                backgroundColor: '#5E34C2',
                borderTopRightRadius: 100,
                borderTopLeftRadius: 100
            },
        },
        tabBarPosition: 'bottom'
    }
)
const Stack = createStackNavigator({
    Home: {
        screen: Tab,
        navigationOptions: {
            headerStyle: { backgroundColor: '#5E34C2', height: 30, borderBottomRightRadius: 100, borderBottomLeftRadius: 100 },
            headerTintColor: "white",
            title: '  ictapp',
        }
    },
    ColecaoLista: ColecaoListaScreen,
    Upload: UploadScreen,
    Chat: { screen: ChatScreen },
    Colecao: { screen: ColecaoScreen },
},
    {
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: '#5E34C2', height: 30, borderBottomRightRadius: 100, borderBottomLeftRadius: 100 },
            headerTintColor: "white",
        },
    }
)
const StackAuth = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Registrar: {
        screen: RegistrarScreen,
    },
},
    {
        headerMode: "none",
        initialRouteName: 'Login'
    }
)
const switchStack = createSwitchNavigator({
    Auth: StackAuth,
    App: Stack
},
    {
        headerMode: "none",
        initialRouteName: 'Auth'
    }
)
export default AppContainer = createAppContainer(switchStack);



