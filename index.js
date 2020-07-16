"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Serializer", {
  enumerable: true,
  get: function () {
    return _serializer.default;
  }
});
Object.defineProperty(exports, "fp", {
  enumerable: true,
  get: function () {
    return _FastParser.default;
  }
});
Object.defineProperty(exports, "types", {
  enumerable: true,
  get: function () {
    return _types.default;
  }
});
Object.defineProperty(exports, "template", {
  enumerable: true,
  get: function () {
    return _template.default;
  }
});
Object.defineProperty(exports, "SerializerValidation", {
  enumerable: true,
  get: function () {
    return _SerializerValidation.default;
  }
});
Object.defineProperty(exports, "ChainTypes", {
  enumerable: true,
  get: function () {
    return _ChainTypes.default;
  }
});
Object.defineProperty(exports, "ObjectId", {
  enumerable: true,
  get: function () {
    return _ObjectId.default;
  }
});
exports.ops = void 0;

var _serializer = _interopRequireDefault(require("./serializer"));

var _FastParser = _interopRequireDefault(require("./FastParser"));

var _types = _interopRequireDefault(require("./types"));

var ops = _interopRequireWildcard(require("./operations"));

exports.ops = ops;

var _template = _interopRequireDefault(require("./template"));

var _SerializerValidation = _interopRequireDefault(require("./SerializerValidation"));

var _ChainTypes = _interopRequireDefault(require("./ChainTypes"));

var _ObjectId = _interopRequireDefault(require("./ObjectId"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }