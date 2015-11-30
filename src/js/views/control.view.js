define(['jquery', 'underscore', 'backbone', 'templates', 'collections/item.collection'],
	($, _, Backbone, templates, itemCollection)=>{

		// Main App View
		return Backbone.View.extend({

			//View element className
			className: 'control',
			//View template
			template: templates.control,
			//View events
			events: {
				'keyup textarea': '_onKeyUp'
			},

			//Initializing of app.view
			initialize() {
				this._addDeBounce();
				this.render();

				this.listenTo(itemCollection, 'json:error', this._showError);
			},

			//Rendering of app
			render() {
				this.$el.html(this.template());
				return this;
			},

			/**
			 * Adding delay for parsing input data
			 * @private
			 * */
			_addDeBounce() {
				this._onKeyUp = _.debounce(this._onKeyUp, 300);
			},

			/**
			 * Rebuilding traversal tree on keyUp event
			 * @private
			 * */
			_onKeyUp(e) {
				itemCollection.fetch(this._parseJSON($(e.currentTarget).val()));
			},

			/**
			 * Showing error
			 * @private
			 * @param text {String}
			 * */
			_showError(text){
				this.$el.find('.error').text(text).show();
			},

			/**
			 * Hiding error
			 * @private
			 * */
			_hideError() {
				this.$el.find('.error').hide();
			},

			/**
			 * Parsing data from textarea field
			 * @private
			 * @param data - {String}
			 * @return {Object}
			 * */
			_parseJSON(data) {
				this._hideError();

				try{
					return itemCollection.validateData(JSON.parse(data || []));
				} catch(e) {
					if(e.customMessage) {
						this._showError(e.customMessage);
					} else {
						this._showError('JSON is not valid');
					}
				}
			}
		});
	});