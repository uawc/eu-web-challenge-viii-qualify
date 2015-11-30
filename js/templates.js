define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["JST"] = this["JST"] || {};

this["JST"]["control"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"title\">JSON for tree generating:<div class=\"error\"></div></div><div class=\"content\"><textarea>[{\"name\":\"Cars\",\"left\":1,\"right\":18},{\"name\":\"Fast\",\"left\":2,\"right\":11},{\"name\":\"Red\",\"left\":3,\"right\":6},{\"name\":\"Ferrari\",\"left\":4,\"right\":5},{\"name\":\"Yellow\",\"left\":7,\"right\":10},{\"name\":\"Lamborghini\",\"left\":8,\"right\":9},{\"name\":\"Slow\",\"left\":12,\"right\":17},{\"name\":\"Lada\",\"left\":13,\"right\":14},{\"name\":\"Polonez\",\"left\":15,\"right\":16}]</textarea></div>");;return buf.join("");
};

this["JST"]["item"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, style, text, x, y) {
buf.push("<text" + (jade.attr("x", "" + (x) + "", true, false)) + (jade.attr("y", "" + (y) + "", true, false)) + (jade.attr("style", "" + (style) + "", true, false)) + (jade.attr("id", "" + (id) + "", true, false)) + ">" + (jade.escape((jade_interp = text) == null ? '' : jade_interp)) + "</text>");}.call(this,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"style" in locals_for_with?locals_for_with.style:typeof style!=="undefined"?style:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"x" in locals_for_with?locals_for_with.x:typeof x!=="undefined"?x:undefined,"y" in locals_for_with?locals_for_with.y:typeof y!=="undefined"?y:undefined));;return buf.join("");
};

this["JST"]["svg"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (background, height, line, title, width) {
buf.push("<svg xmlns=\"http://www.w3.org/2000/svg\"" + (jade.attr("height", "" + (height) + "", true, false)) + (jade.attr("width", "" + (width) + "", true, false)) + "><rect" + (jade.attr("height", "" + (background.height) + "", true, false)) + (jade.attr("width", "" + (background.width) + "", true, false)) + (jade.attr("style", "" + (background.style) + "", true, false)) + "></rect><text" + (jade.attr("x", "" + (title.x) + "", true, false)) + (jade.attr("y", "" + (title.y) + "", true, false)) + (jade.attr("style", "" + (title.style) + "", true, false)) + ">" + (jade.escape((jade_interp = title.text) == null ? '' : jade_interp)) + "</text><line" + (jade.attr("x1", "" + (line.x1) + "", true, false)) + (jade.attr("y1", "" + (line.y1) + "", true, false)) + (jade.attr("x2", "" + (line.x2) + "", true, false)) + (jade.attr("y2", "" + (line.y2) + "", true, false)) + (jade.attr("style", "" + (line.style) + "", true, false)) + "></line></svg>");}.call(this,"background" in locals_for_with?locals_for_with.background:typeof background!=="undefined"?background:undefined,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"line" in locals_for_with?locals_for_with.line:typeof line!=="undefined"?line:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));;return buf.join("");
};

return this["JST"];

});