define(['exports', 'react', 'create-react-class', 'prop-types', '../../../../components/icon-settings', '../../../../components/panel', '../../../../components/panel/filtering/group', '../../../../components/panel/filtering/list', '../../../../components/panel/filtering/list-heading', '../../../../components/filter', '../../../../components/menu-picklist'], function (exports, _react, _createReactClass, _propTypes, _iconSettings, _panel, _group, _list, _listHeading, _filter, _menuPicklist) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _panel2 = _interopRequireDefault(_panel);

	var _group2 = _interopRequireDefault(_group);

	var _list2 = _interopRequireDefault(_list);

	var _listHeading2 = _interopRequireDefault(_listHeading);

	var _filter2 = _interopRequireDefault(_filter);

	var _menuPicklist2 = _interopRequireDefault(_menuPicklist);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	var options = {
		'show-me': [{ label: 'All Products', value: 'all-products' }, { label: 'All Wackamoles', value: 'all-Wackamoles' }]
	};

	var Example = (0, _createReactClass2.default)({
		displayName: 'FilterExample',

		propTypes: function propTypes() {
			return {
				align: _propTypes2.default.string
			};
		},
		getInitialState: function getInitialState() {
			return {
				'show-me': {
					selectedPicklistItem: options['show-me'][0],
					selectedItem: options['show-me'][0],
					isActive: true
				}
			};
		},
		onChangePredicate: function onChangePredicate(event, _ref) {
			var id = _ref.id;

			var idSuffix = id.split('sample-panel-filtering-')[1];
			this.setState(_defineProperty({}, idSuffix, _extends({}, this.state[idSuffix], {
				selectedItem: this.state[idSuffix].selectedPicklistItem
			})));
		},
		onSelectPicklist: function onSelectPicklist(selectedItem, id) {
			this.setState(_defineProperty({}, id, _extends({}, this.state[id], {
				selectedPicklistItem: selectedItem
			})));
		},
		onRemove: function onRemove(event, _ref2) {
			var id = _ref2.id;

			var idSuffix = id.split('sample-panel-filtering-')[1];
			this.setState(_defineProperty({}, idSuffix, _extends({}, this.state[idSuffix], {
				isActive: false
			})));
		},
		render: function render() {
			var _this = this;

			return this.state['show-me'].isActive && _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					_filter2.default,
					{
						align: this.props.align,
						id: 'sample-panel-filtering-show-me',
						isPermanent: true,
						onChange: this.onChangePredicate,
						onRemove: this.onRemove,
						property: 'Show Me',
						predicate: this.state['show-me'].selectedItem.label
					},
					_react2.default.createElement(_menuPicklist2.default, {
						isInline: true,
						label: 'Show Me',
						onSelect: function onSelect(selectedItem) {
							_this.onSelectPicklist(selectedItem, 'show-me');
						},
						options: options['show-me'],
						placeholder: 'Select record type',
						value: this.state['show-me'].selectedPicklistItem.value
					})
				)
			);
		}
	});

	exports.default = Example;
});