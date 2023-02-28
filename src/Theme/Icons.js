import { PropTypes } from "prop-types";
import ZocialIcon from "react-native-vector-icons/Zocial";
import OcticonIcon from "react-native-vector-icons/Octicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Component } from "react";
import COLORS from "./Colors";

class Icon extends Component {
  _getIconType(type) {
    switch (type) {
      case "zocial":
        return ZocialIcon;
      case "octicon":
        return OcticonIcon;
      case "material":
        return MaterialIcon;
      case "material-community":
        return MaterialCommunityIcon;
      case "ionicon":
        return Ionicon;
      case "foundation":
        return FoundationIcon;
      case "evilicon":
        return EvilIcon;
      case "entypo":
        return EntypoIcon;
      case "font-awesome":
        return FAIcon;
      case "font-awesome5":
        return FAIcon5;
      case "simple-line-icon":
        return SimpleLineIcon;
      case "ant-design":
        return AntDesign;
      case "feather":
        return FeatherIcon;
      case "fontisto":
        return Fontisto;
      case "octicons":
        return Octicons;
      case "fontAwesome5":
        return FontAwesome5;
      default:
        return MaterialIcon;
    }
  }

  render() {
    const { size: iconSize, name, color, type, style } = this.props;
    const FontIcon = this._getIconType(type);
    return (
      <FontIcon
        {...this.props}
        name={name}
        style={style}
        size={iconSize}
        color={color}
      />
    );
  }
}

Icon.proTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
};
Icon.defaultProps = { color: COLORS.WHITE, size: 20 };

export default Icon;
