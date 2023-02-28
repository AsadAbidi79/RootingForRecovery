import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../Components/Drawer/CustomDrawer";
import AddNewTracker from "../Screens/Main/AddNewTracker";
import Article from "../Screens/Main/Article";
import Directions from "../Screens/Main/Directions";
import EditProfile from "../Screens/Main/EditProfile";
import History from "../Screens/Main/History";
import Home from "../Screens/Main/Home";
import Notifications from "../Screens/Main/Notifications";
import ODReversalAgentLocator from "../Screens/Main/ODReversalAgentLocator";
import PrivacyPolicy from "../Screens/Main/PrivacyPolicy";
import Profile from "../Screens/Main/Profile";
import SavedItem from "../Screens/Main/SavedItem";
import SearchScreen from "../Screens/Main/SearchScreen";
import SobrietyTrackerDetail from "../Screens/Main/SobrietyTrackerDetail";
import SupportGroupFinder from "../Screens/Main/SupportGroupFinder";
import TermsCondition from "../Screens/Main/TermsCondition";
import Video from "../Screens/Main/Video";
import ViewAll from "../Screens/Main/ViewAll";

const Drawer = createDrawerNavigator();

export const Main = ({ focused }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "transparent",
          width: "80%",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} {...focused} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ViewAll" component={ViewAll} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Video" component={Video} />
      <Drawer.Screen name="SearchScreen" component={SearchScreen} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen name="SavedItem" component={SavedItem} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="AddNewTracker" component={AddNewTracker} />
      <Drawer.Screen name="SupportGroupFinder" component={SupportGroupFinder} />
      <Drawer.Screen
        name="ODReversalAgentLocator"
        component={ODReversalAgentLocator}
      />
      <Drawer.Screen
        name="SobrietyTrackerDetail"
        component={SobrietyTrackerDetail}
      />
      <Drawer.Screen name="Directions" component={Directions} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};
