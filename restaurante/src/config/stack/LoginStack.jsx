import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";
import CreateAccount from "../../modules/auth/account/adapters/screens/CreateAccount";
import UserGuest from "../../modules/auth/login/adapters/screens/UserGuest";
import Profile from "../../modules/auth/account/adapters/screens/Profile";
import UserLog from "../../modules/auth/account/adapters/screens/UserLog";

const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="UserLog">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Inicia sesión" }}
      />
      <Stack.Screen 
        name="CreateAccount"
        component={CreateAccount}
        options={{title: 'Crea tu cuenta'}}
      />
      <Stack.Screen 
        name="UserGuest"
        component={UserGuest}
        options={{title: '¡vamos, crea tu cuenta!'}}
      />
       <Stack.Screen 
        name="Profile"
        component={Profile}
        options={{title: 'Perfil'}}
      />
       <Stack.Screen 
        name="UserLog"
        component={UserLog}
        options={{title: 'Cuenta'}}
      />
    </Stack.Navigator>
  );
}
