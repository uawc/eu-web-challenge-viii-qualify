define(['underscore', 'backbone'],
	(_, Backbone)=>{

		return Backbone.Model.extend({
			//Default data for this Model
			defaults: {
				width: 500,
				height: 700,
				background: {
					width: 500,
					height: 700,
					style: "fill:#000084;stroke:#0700F3; stroke-width:3"
				},
				title: {
					x: 140,
					y: 30,
					text: "Traversal Tree Output:",
					style: "fill:#0491C7"
				},
				line: {
					x1: 0,
					y1: 50,
					x2: 500,
					y2: 50,
					style: "stroke:#0700F3; stroke-width:2"
				}
			}
		});
	});