System.config({
	defaultJSExtensions: false,
	transpiler: 'traceur',
	meta: {
		'*.json': {loader: 'json'}
	},
	map: {
		'../../src/': 'source:',
		'../../': 'project:',
		'traceur': '../node_modules/bower-traceur/traceur.js'
	},
	paths: {
		'project:*': '../*',
		'source:*': '../src/*',
		//loader plugins
		'json': '../node_modules/systemjs-plugin-json/json.js'	
	}
});
