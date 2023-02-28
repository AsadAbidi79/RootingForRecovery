import { createStackNavigator } from "@react-navigation/stack";
import ConfirmPassword from "../Screens/Register/ConfirmPassword";
import ForgotPassword from "../Screens/Register/ForgotPassword";
import Login from "../Screens/Register/Login";
import Otp from "../Screens/Register/Otp";
import Signup from "../Screens/Register/Signup";

const Stack = createStackNavigator();

function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
export default RegisterStack;
