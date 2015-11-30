'use strict';

define(['jquery', 'underscore', 'backbone', 'templates'], function ($, _, Backbone, templates) {

	// Main App View
	return Backbone.View.extend({

		//Overriding el property to be able to set nameSpace for svg elements
		el: function el() {
			return document.createElementNS("http://www.w3.org/2000/svg", "g");
		},

		//View template
		template: templates.item,

		//Initializing of app.view
		initialize: function initialize() {
			this.render();
		},

		//Rendering of app
		render: function render() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
//# sourceMappingURL=item.view.js.map
