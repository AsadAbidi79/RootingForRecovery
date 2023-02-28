import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "../Theme/Colors";
import { FONTS, SIZES } from "../Theme/Fonts";

export default CommonStyles = {
  fieldTitle: {
    color: COLORS.PRIMARY,
    ...FONTS.Regular14,
    paddingLeft: SIZES.base,
    paddingBottom: SIZES.base,
  },
  text: {
    color: COLORS.PRIMARY,
    ...FONTS.Regular13,
  },
  title: {
    color: COLORS.PRIMARY,
    ...FONTS.Regular22,
    textAlign: "center",
    paddingBottom: hp("3"),
  },
  cardTitle: {
    color: COLORS.PRIMARY,
    ...FONTS.Bold15,
  },
};
