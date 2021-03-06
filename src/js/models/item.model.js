define(['underscore', 'backbone'],
	(_, Backbone)=>{

		return Backbone.Model.extend({
			//Default data for this Model
			defaults: {
				x: 50,
				y: 100,
				isClosed: false,
				isHided: false,
				text: "Cars",
				style: "fill:#bbb;"
			},

			/**
			 * Toggling model's "isClosed" attribute
			 * @public
			 * */
			toggleIsClosed() {
				this.set('isClosed', !this.get('isClosed'));
			},

			/**
			 * Toggling model's "isHidden" attribute
			 * @public
			 * */
			toggleIsHidden() {
				this.set('isHidden', !this.get('isHidden'));
			},

			/**
			 * Checking if this model is last child in the tree
			 * @public
			 * @return {boolean}
			 * */
			isLastChild(){
				return this.get('right') - this.get('left') > 1;
			}
		});
});