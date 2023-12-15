import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import AddMoney from "../screens/AddMoney";
import { View } from "react-native";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={Dashboard}
        options={{
          headerTitleStyle: { color: "white" },
          headerBackground: () => (
            <View
              style={{
                backgroundColor: "#A682FF",
                height: 110,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Add Money"
        component={AddMoney}
        options={{
          headerBackground: () => (
            <View
              style={{
                backgroundColor: "#F5F5F5",
                height: 100,
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
