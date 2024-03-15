import React from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getFontSize, getResWidth} from './responsive';

const VectorIcon = props => {
  const {size, type} = props;
  props.size = getFontSize(size);
  return (
    <>
      {/* {type == 'FontAwesome5Brands' && <FontAwesome5Brands {...props} />} */}
      {type == 'AntDesign' && <AntDesign {...props} />}
    </>
  );
};

VectorIcon.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
  ]),
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
  solid: PropTypes.any,
};
VectorIcon.defaultProps = {
  color: 'black',
};

const VectorButton = props => {
  const {type} = props;
  const {title, textProps} = props;
  const TextComponent = () => {
    return <Text {...textProps}>{title}</Text>;
  };
  return (
    <>
      {type == 'AntDesign' && (
        <AntDesign.Button {...props}>
          {title && title != '' && <TextComponent />}
        </AntDesign.Button>
      )}
    
    </>
  );
};
VectorButton.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
  ]),
  iconStyle: PropTypes.any,
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  borderRadius: PropTypes.number,
  title: PropTypes.string,
  style: PropTypes.any,
  textProps: PropTypes.any,
};

export {VectorIcon, VectorButton};
