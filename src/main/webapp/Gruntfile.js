	module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			"default" : {
				src: ['app/**/*.ts'],
				options:{
					"target" : "es5",
					"module" : "commonjs",
					"moduleResolution" : "node",
					"sourceMap" : false,
					"failOnTypeErrors" : false,
					"emitDecoratorMetadata": true,
					"experimentalDecorators" : true,
					"removeComments" : false,
					"noImplicitAny": false
				}
			}
		},
		watch: {
			scripts: {
				files : ['app/**/*.ts'],
				tasks : ['ts'],
				options : {
					spawn: false,
					event: ['changed', 'added', 'deleted']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['ts','watch']);
}