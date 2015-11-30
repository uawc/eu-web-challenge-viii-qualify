define(['jquery', 'underscore', 'backbone', 'templates'],
	($, _, Backbone, templates)=>{

		// Main App View
		return Backbone.View.extend({

			//Overriding el property to be able to set nameSpace for svg elements
			el: function() {
				return document.createElementNS("http://www.w3.org/2000/svg", "g");
			},

			//View template
			template: templates.item,

			//Initializing of app.view
			initialize() {
				this.render();
			},

			//Rendering of app
			render() {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});
	});