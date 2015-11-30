'use strict';

define(['underscore', 'backbone', 'models/item.model'], function (_, Backbone, ItemModel) {

	var ItemsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: ItemModel,

		/**
   * Overriding fetch method
   * @public
   * @param data - {array}
   * */
		fetch: function fetch(data) {
			this.reset();
			this.add(this.parse(data));
		},

		/**
   * Toggling models visibility attribute
   * @public
   * @param currentModel - {model}
   * @param isHide - {boolean}
   * */
		toggleNodes: function toggleNodes(currentModel, isHide) {
			var models = _.each(this.models, function (el) {
				if (currentModel.get('right') > el.get('left') && el.get('left') > currentModel.get('left')) {
					el.set('isHidden', isHide);
				}
			});

			this.fetch(models);
		},

		/**
   * Validating of input data format
   * @public
   * @param data - {array}
   * @return data - {array}
   * */
		validateData: function validateData(data) {
			_.each(data, function (el) {
				if (!_.has(el, 'name') || !_.has(el, 'left') || !_.has(el, 'right')) {
					throw { customMessage: 'Wrong data format' };
				}
			});

			return data;
		},

		/**
   * Parsing data and generating traversal tree
   * @public
   * @param data - {array}
   * @return {array}
   * */
		parse: function parse(data) {
			var _this = this;

			var id = 0,
			    right = [],
			    models = [],
			    offset = 100;

			data = this._sortData(data);

			_.each(data, function (element) {
				var attributes = _this._getModelAttributes(element);

				_this._removeRightFromStack(right, attributes);
				_this._extendAttributes(attributes, right, offset, id);

				if (!attributes.isHidden) offset += 35;
				id++;

				models.push(element);
				right.push(attributes.right);
			});

			return models;
		},

		/**
   * Sorting data by "left" key
   * @private
   * @param data - {array}
   * @return {array}
   * */
		_sortData: function _sortData(data) {
			return _.sortBy(data, 'left');
		},

		/**
   * Checking if object a model and returning proper attributes
   * @private
   * @param element - {model || object}
   * @return {object}
   * */
		_getModelAttributes: function _getModelAttributes(element) {
			return element.attributes ? element.attributes : element;
		},

		/**
   * Removing right value from the stack
   * @private
   * @param right - {array}
   * @param attributes - {object}
   * */
		_removeRightFromStack: function _removeRightFromStack(right, attributes) {
			if (right.length) {
				while (right[right.length - 1] < attributes.right) {
					right.pop();
				}
			}
		},

		/**
   * Extending attributes with data
   * @private
   * @param attributes - {object}
   * @param right - {array}
   * @param offset - {number}
   * @param id - {number}
   * */
		_extendAttributes: function _extendAttributes(attributes, right, offset, id) {
			_.extend(attributes, {
				text: '-'.repeat(right.length) + attributes.name,
				y: offset,
				id: id
			});
		}
	});

	return new ItemsCollection();
});
//# sourceMappingURL=item.collection.js.map
