import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../utils";
import metrics from "../../config/metrics";
import constants from "../../config/constants";

const Colors = {
  background: "rgba(255,255,255,1)",
  link: "rgb(217,125,84)",
  dayLabel: "#f0f3f4",
  dayText: "#a0a0a0",
  select: "rgb(105,228,166)",
  selectText: "rgb(15,10,64)",
  border: "rgb(200,209,211)",
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(10),
  },
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    marginTop: normalize(30),
    alignSelf: "center",
  },
  banner: {
    marginTop: normalize(10),
    marginBottom: normalize(12),
    width: metrics.screenWidth - 2 * normalize(18),
  },
  textInputLabel: {
    marginBottom: normalize(7),
  },
  inputGap: {
    marginBottom: normalize(16),
  },
  buttonStyle: {
    alignSelf: "center",
    marginVertical: normalize(20),
  },
  rowAlign: {
    flex: 1,
    flexDirection: "row",
  },
  col: {
    flex: 1,
  },
  marginRight: {
    marginRight: normalize(15),
  },
  selected: {
    backgroundColor: Colors.select,
  },
  selectedText: {
    color: Colors.selectText,
    fontSize: normalizeFont(12),
  },
  dayContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 7,
  },
  stepTwoView: {
    marginTop: normalize(40),
    marginHorizontal: normalize(10),
  },
  workingDays: {
    color: "#262626",
    fontSize: 15,
    marginTop: 10,
  },
  day: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(7),
    backgroundColor: Colors.dayLabel,
    alignSelf: "flex-start",
    borderRadius: 20,
    marginRight: normalize(20),
    marginBottom: normalize(15),
  },
  dayText: {
    fontSize: normalizeFont(12),
    color: Colors.dayText,
    // paddingVertical: normalize(4),
    paddingHorizontal: normalize(3),
    fontFamily: constants.Fonts.MEDIUM,
    fontSize: 12,
  },
  timeView: {
    // width: metrics.screenWidth / 1.2,
    // width: metrics.screenWidth / 2 - normalize(10) - 10,
    marginVertical: normalize(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTime: {
    // color: "#a0a0a0",
    fontSize: 14,
    fontFamily: constants.Fonts.MEDIUM,
  },
  timePickerView: {
    borderRadius: 6,
    backgroundColor: "#f0f3f4",
    // width: metrics.screenWidth / 2.6,
    width: metrics.screenWidth / 2 - normalize(20) - 10,
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(12),
    height: normalize(45),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.border,
    borderWidth: 1,
  },
  datePickerValue: {
    borderRadius: 5,
    backgroundColor: "#f0f3f4",
    // width: metrics.screenWidth/ 2.8,
    width: metrics.screenWidth / 2 - normalize(20) - 10,
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(12),
    height: normalize(45),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.border,
    borderWidth: 1,
  },
  dollarView: {
    height: normalize(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(160,160,160)",
    borderRadius: 5,
    width: normalize(41),
  },
  dateInput: {
    borderRadius: 6,
    backgroundColor: "#f0f3f4",
    width: metrics.screenWidth / 2.2,
    height: normalize(45),
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    borderColor: Colors.border,
    borderWidth: 1,
  },
  dateDropDownView: {
    borderRadius: 6,
    backgroundColor: "#f0f3f4",
    width: metrics.screenWidth / 2.73,
    height: normalize(45),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: normalize(6),
    // paddingHorizontal: normalize(12),
    // paddingHorizontal: 0,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  editorView: {
    height: normalize(141),
    // width: metrics.screenWidth - 70,
    borderRadius: 6,
    backgroundColor: "#f0f3f4",
    borderWidth: 0.3,
    borderColor: "#a0a0a0",
    marginTop: 5,
  },
  dollarText: {
    fontSize: 19,
    color: "#0f0a40",
    fontFamily: constants.Fonts.BLACK,
  },
  bottomView: {
    // marginVertical: 22,
    marginTop: 10,
  },
  textInput: {
    paddingTop: 16,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#a0a0a0",
    fontFamily: constants.Fonts.MEDIUM,
  },
  textInputSalary: {
    // paddingTop: 16,
    paddingHorizontal: 14,
    fontSize: 15,
    fontFamily: constants.Fonts.MEDIUM,
    color: "#a0a0a0",
    height: 45,
    flex: 1,
  },
  genderView: {
    // width: metrics.screenWidth - 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // marginVertical: 18,
    marginTop: 10,
    height: 40,
  },
  buttonView: {
    marginVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c8d1d3",
    width: metrics.screenWidth / 4,
    padding: 10,
    alignItems: "center",
  },
  genderText: {
    color: "#0f0a40",
    fontSize: 12,
  },
  dropDownView: {
    // width: metrics.screenWidth - 70,
    borderWidth: 1,
    borderColor: "#c8d1d3",
    marginVertical: 8,
    padding: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: normalize(50),
    backgroundColor: "#f0f3f4",
  },
  dropView: {
    width: metrics.screenWidth - 43,
    height: 170,
    marginHorizontal: -13,
    marginTop: 15,
  },
  dropHourView: {
    height: 170,
    width: metrics.screenWidth / 2.73,
    marginLeft: 5,
    marginTop: 10,
    marginRight: -1,
  },
});

export default styles;
