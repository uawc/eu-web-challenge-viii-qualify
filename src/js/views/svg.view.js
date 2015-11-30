define(['jquery', 'underscore', 'backbone', 'templates', 'views/item.view', 'models/item.model'],
	($, _, Backbone, templates, ItemView, ItemModel)=>{

		// Main App View
		return Backbone.View.extend({

			//View element className
			className: "svg-wrapper",
			//View template
			template: templates.svg,
			//View events
			events: {
				'mouseover text': '_onMouseOver',
				'mouseout text': '_onMouseOut',
				'click text': '_onTextClick'
			},

			//Initializing of app.view
			initialize() {
				this.render();

				this.listenTo(this.collection, 'reset', this.clear);
				this.listenTo(this.collection, 'add', this._renderChild);
			},

			//Rendering of app
			render() {
				this.$el.html(this.template(this.model.toJSON()));
				this.collection.each(this._renderChild, this);
				return this;
			},

			/**
			 * Clearing view element
			 * @public
			 * */
			clear(){
				this.$el.html(this.template(this.model.toJSON()));
			},

			/**
			 * Render for each model
			 * @private
			 * @param model - {object}
			 * */
			_renderChild(model) {
				if(!model.get('isHidden')) {
					this.$el.find('svg').append((new ItemView({ model })).el);
				}
			},

			/**
			 * Changing text color on mouse over
			 * @private
			 * */
			_onMouseOver(e) {
				$(e.target).attr('style', 'fill:yellow;');
			},

			/**
			 * Restoring text color on mouse out
			 * @private
			 * */
			_onMouseOut(e) {
				$(e.target).attr('style', 'fill:#bbb;');
			},

			/**
			 * Expanding/Collapsing child elements on text clicking
			 * @private
			 * */
			_onTextClick(e) {
				let currentModel = this.collection.at($(e.target).attr('id'));

				if(currentModel.get('isClosed')){
					this._expandTreeElement(currentModel);
				} else if(currentModel.isLastChild()) {
					this._collapseTreeElement(currentModel);
				}
			},

			/**
			 * Collapsing child elements
			 * @private
			 * @param parentElement - {model}
			 * */
			_collapseTreeElement(parentElement) {
				parentElement.toggleIsClosed();
				this.collection.toggleNodes(parentElement, true);
			},

			/**
			 * Expanding child elements
			 * @private
			 * @param parentElement - {model}
			 * */
			_expandTreeElement(parentElement) {
				parentElement.toggleIsClosed();
				this.collection.toggleNodes(parentElement, false);
			}
		});
	});