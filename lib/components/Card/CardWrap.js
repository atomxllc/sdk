"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  min-height: 100px;\n  background-color: #fff;\n  overflow: hidden;\n  color: #181919;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  opacity: 1;\n  position: relative;\n\n  transition-duration: 0.15s;\n  transition-timing-function: ease-in-out;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  transition-property: background, border-color;\n  &:hover {\n    background: #f5f8fa;\n    border-color: rgba(136, 153, 166, 0.5);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: calc(", " * 7/9);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  height: ", ";\n  transition-property: background, border-color, height;\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-color: ", ";\n  transition-property: filter;\n\n  &&& {\n    color: ", ";\n  }\n\n  &:hover {\n    filter: brightness(90%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HEIGHT = "382px";

var contrastStyle = function contrastStyle(_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color;
  return (0, _styledComponents.css)(_templateObject(), backgroundColor, color, color);
};

var largeStyle = (0, _styledComponents.css)(_templateObject2(), HEIGHT, _utils.media.mobile(_templateObject3(), HEIGHT));
var hoverStyle = (0, _styledComponents.css)(_templateObject4());

var reverseStyle = function reverseStyle(_ref2) {
  var cardSize = _ref2.cardSize;
  return (0, _styledComponents.css)(_templateObject5(), (0, _utils.isLarge)(cardSize) ? "column-reverse" : "row-reverse");
};

var baseStyle = (0, _styledComponents.css)(_templateObject6());

var createEl = function createEl(_ref3) {
  var as = _ref3.as;
  return (0, _styledComponents.default)(as)(baseStyle, function (_ref4) {
    var loading = _ref4.loading,
        contrast = _ref4.contrast;
    return !loading && !contrast && hoverStyle;
  }, function (_ref5) {
    var cardSize = _ref5.cardSize;
    return (0, _utils.isLarge)(cardSize) && largeStyle;
  }, function (_ref6) {
    var reverse = _ref6.reverse;
    return reverse && reverseStyle;
  }, function (_ref7) {
    var backgroundColor = _ref7.backgroundColor,
        color = _ref7.color,
        contrast = _ref7.contrast;
    return contrast && color && backgroundColor && contrastStyle;
  }, function (_ref8) {
    var backgroundColor = _ref8.backgroundColor,
        color = _ref8.color,
        contrast = _ref8.contrast;
    return contrast && (!color || !backgroundColor) && hoverStyle;
  });
};

var CACHE = {};

var CardWrap = function CardWrap(_ref9) {
  var rel = _ref9.rel,
      href = _ref9.href,
      target = _ref9.target,
      props = _objectWithoutProperties(_ref9, ["rel", "href", "target"]);

  var key = JSON.stringify(_objectSpread({}, props, {
    children: undefined
  }));
  return (0, _react.createElement)(CACHE[key] || (CACHE[key] = createEl(props)), props.as === "a" ? _objectSpread({
    href: href,
    rel: rel,
    target: target
  }, props) : props);
};

CardWrap.defaultProps = {
  as: "a",
  rel: "noopener noreferrer",
  target: "_blank"
};
var _default = CardWrap;
exports.default = _default;