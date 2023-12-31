import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, ProductDetails,LoginPage,Order,Favorites,SignUp, NewWatchs } from "./screens";
import CartContext from "./components/products/CardContext";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Orders"
          component={Order}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ProductList"
          component={NewWatchs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </CartContext.Provider>
  );
}
