import React, {Component, useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import * as PropTypes from 'prop-types';
import {SvgUri} from 'react-native-svg';

// import {ImagePreview} from '../components/CommonRender/Modal';

function ImageComponent(props) {
  const {
    isSVG,
    showPreview,
    url,
    style,
    defaultSource,
    resizeMode,
  } = props;
  const findSize = () => {
    if (style) {
      if (Array.isArray(style) && style.length > 0) {
        let width = 0;
        let height = 0;
        style.forEach(item => {
          if (item && item.width) {
            width = item.width;
          }
          if (item && item.height) {
            height = item.height;
          }
        });
        return {height: height, width: width};
      } else if (typeof style === 'object') {
        return {width: style.width, height: style.height};
      }
    }
  };

  return (
    <>
      {showPreview && (
        <TouchableOpacity
          disabled={!showPreview}
          onPress={() => {
            if (showPreview) {
              setPreview(true);
            }
          }}
          style={[
            findSize(),
            {
              alignSelf: 'center',
              position: 'absolute',
              zIndex: 1,
            },
          ]}
        />
      )}
      <>
        {isSVG ? (
          <SvgUri
            uri={url}
            style={[{width: '100%', height: '100%'}, style]}
          />
        ) : (
          <Image
            source={{
              uri: url,
            }}
           
            defaultSource={defaultSource}
            resizeMode={resizeMode}
            style={[style]}
          />
        )}
      </>
    </>
  );
}
ImageComponent.propTypes = {
  isSVG: PropTypes.bool,
  baseURL: PropTypes.string,
  url: PropTypes.string,
  style: PropTypes.any,
  showPreview: PropTypes.bool,
  showlog: PropTypes.bool,
};
ImageComponent.defaultProps = {
  baseURL: MediaURL,
  isSVG: false,
  url: '',
  style: {
    backgroundColor: '#EDEDED',
  },
  showlog: false,
};

export {ImageComponent};
