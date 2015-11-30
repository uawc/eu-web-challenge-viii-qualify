define(['jquery', 'underscore', 'backbone', 'views/svg.view', 'views/control.view', 'models/svg.model', 'collections/item.collection'],
	($, _, Backbone, SvgView, ControlView, SvgModel, itemCollection)=>{

		// Main App View
		return Backbone.View.extend({

			el: "#app-root",

			//Initializing of app.view
			initialize() {
				this.svgView = new SvgView({model: new SvgModel(), collection: itemCollection});
				this.controlView = new ControlView();
				this.render();

				this.$el.find('textarea').trigger('keyup');
			},

			//Rendering of app
			render() {
				this.$el.append(this.svgView.el);
				this.$el.append(this.controlView.el);
				return this;
			}
		});
});