
import { getResHeight, getResWidth, getFontSize } from './responsive';
import svgIcon from './svgicon';
const color = {
  primary: 'rgba(5, 60, 109, 1)',
  textSelection: 'rgba(5, 60, 109, 0.2)',
  accent: '#FFFFFF',
  secondPrimary: '#053C6D',
  transparent: 'transparent',
  black: 'black',
  text: '#2c2c2c',
  dimLight: '#999',
  light: '#ededed',
  extraLight: '#faf9f9',
  red: '#ea5455',
  bg: 'white',
  error: '#FF0000',
  disableColor: '#fcefe3',
  textColor: '#053C6D',
  alert: '#ff0000',
  modalBg: 'rgba(0, 0, 0, 0.6)',
  playbtn: '#0C0C0C99',
  playicon: '#FFFFFF',
  header: ['#324D8B', '#298CEE'],
  searchOutline: '#38648B',
};
const font = {
  mulishRegular: 'Mulish-Regular',
  mulishSemiBold: 'Mulish-SemiBold',
  mulishBold: 'Mulish-Bold',
  mulishExtraBold: 'Mulish-ExtraBold',
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
};
const styles = {
  inputPlaceholder: {
    color: '#232731B2',
    fontFamily: font.mulishRegular,
    fontSize: getFontSize(15),
    fontWeight: '400',
  },
  btnTitleStyle: {
    fontFamily: font.mulishRegular,
    fontSize: getFontSize(13),
    fontWeight: '600',
    color: color.accent,
  },
  inputTitle: {
    color: '#7C7C7C',
    fontFamily: font.mulishRegular,
    fontSize: getFontSize(13),
    fontWeight: '500',
  },
  roundBtnShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: getResHeight(2)},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 15,
  },
  cardEffect: {
    backgroundColor: color.accent,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: getResHeight(2)},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 15,
  },
};
const theme = {
  color,
  font,
  styles,
  svg: svgIcon,
};

export default theme;
