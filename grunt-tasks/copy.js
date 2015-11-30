module.exports = {
	font: {
		expand: true,
		cwd: 'src/fonts',
		src: ['**/*.eot', '**/*.woff', '**/*.svg', '**/*.ttf'],
		dest: 'app/css/fonts'
	},
	fav: {
		expand: true,
		cwd: 'src',
		src: ['favicon.ico'],
		dest: 'app'
	}
};