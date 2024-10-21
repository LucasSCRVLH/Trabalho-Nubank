import { StatusBar } from "expo-status-bar";
import Home from "./assets/src/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Pix from "./assets/src/screens/Pix"


const Stack = createStackNavigator()
export default function App() {
 
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Pix" component={Pix}/>
      
      </Stack.Navigator>
    
    
    </NavigationContainer>



  );
}
