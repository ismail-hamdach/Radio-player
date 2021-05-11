import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ContacUsScreen from '../screens/ContactUsScreen'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import { NavBar } from "../components/NavBar";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Home = () => {
    return(
        <Stack.Navigator 
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#db0518'
                    }
                }
            }>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    headerTitle: props => <NavBar {...props} />,
                    headerLeft : () => (
                        <Icon.Button
                            name="menu"
                            backgroundColor="#db0518"
                            onPress={() =>navigation.toggleDrawer()}
                        >
                            
                        </Icon.Button>
                    )
                  })}
                />

        </Stack.Navigator>
    
    )
}

const Contact = () => {
    return(
        <Stack.Navigator 
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#db0518'
                    }
                }
            }>
            
            <Stack.Screen name="Contact" component={ContacUsScreen}
                    options={({ navigation, route }) => ({
                        headerTitle: props => <NavBar {...props} />,
                        headerLeft : () => (
                            <Icon.Button
                                name="menu"
                                backgroundColor="#db0518"
                                onPress={() =>navigation.toggleDrawer()}
                            >
                                
                            </Icon.Button>
                        )
                      })}
                />
        </Stack.Navigator>
    
    )
}


const AppStack = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={props => <MenuScreen {...props} />}
                
            >
                <Drawer.Screen
                    name="Radio"
                    component={Home}
                    options={{ headerTitle: props => <NavBar {...props} /> }}
                />
                
                <Drawer.Screen name="Contact-us" component={Contact}
                    options={{ headerTitle: props => <NavBar {...props} /> }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppStack