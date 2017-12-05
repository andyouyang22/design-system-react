define(['exports', 'react', 'create-react-class', '../../../../components/icon-settings', '../../../../components/media-object', '../../../../components/icon'], function (exports, _react, _createReactClass, _iconSettings, _mediaObject, _icon) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _mediaObject2 = _interopRequireDefault(_mediaObject);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Example = (0, _createReactClass2.default)({
		displayName: 'MediaObjectExample',

		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(_mediaObject2.default, {
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.',
					figure: _react2.default.createElement(_icon2.default, { category: 'standard', name: 'user', size: 'large' }),
					verticalCenter: true
				})
			);
		}
	}); // `~` is replaced with design-system-react at runtime
	exports.default = Example;
});