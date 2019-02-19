"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Content = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CardText = _interopRequireDefault(require("./CardText"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 2px 0;\n  min-width: 0;\n  box-sizing: border-box;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    > p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 125px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var REGEX_STRIP_WWW = /^www\./;

var getHostname = function getHostname(href) {
  var _ref = new URL(href),
      hostname = _ref.hostname;

  return hostname.replace(REGEX_STRIP_WWW, '');
};

var isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};

var largeContentStyle = (0, _styledComponents.css)(_templateObject());
var mobileDescriptionStyle = (0, _styledComponents.css)(_templateObject2(), _utils.media.mobile(_templateObject3()));
var Content = (0, _styledComponents.default)('div')(_templateObject4(), function (_ref2) {
  var cardSize = _ref2.cardSize;
  return isLarge(cardSize) && largeContentStyle;
});
exports.Content = Content;
var Header = (0, _styledComponents.default)('header')(_templateObject5());
var Description = (0, _styledComponents.default)('div')(_templateObject6(), function (_ref3) {
  var cardSize = _ref3.cardSize;
  return !isLarge(cardSize) && mobileDescriptionStyle;
});
var Footer = (0, _styledComponents.default)('footer')(_templateObject7());

var _default = function _default(_ref4) {
  var title = _ref4.title,
      description = _ref4.description,
      url = _ref4.url,
      cardSize = _ref4.cardSize,
      className = _ref4.className;
  return _jsx(Content, {
    className: className,
    cardSize: cardSize
  }, void 0, _jsx(Header, {
    className: "microlink_card__content_title"
  }, void 0, _jsx(_CardText.default, {
    lines: 1
  }, void 0, title)), _jsx(Description, {
    className: "microlink_card__content_description",
    cardSize: cardSize
  }, void 0, _jsx(_CardText.default, {
    lines: 2
  }, void 0, description)), _jsx(Footer, {
    className: "microlink_card__content_url"
  }, void 0, _jsx(_CardText.default, {
    lines: 1
  }, void 0, url && getHostname(url))));
};

exports.default = _default;