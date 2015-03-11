module.exports = function( grunt ) {
    require( 'load-grunt-tasks' )(grunt);
    grunt.initConfig({

        shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },// shell

        watch : {
            files : [ '_layouts/*.html',
                '_posts/*.html',
                '_sass/*.scss',
                'css/*.css',
                'css/libs/*.css',
                '_config.yml',
                'index.html',
                '404.html' ],
            tasks : [ 'shell:jekyllServe' ],
            options : {
                spawn : false,
                interrupt: true,
                atBegin : true,
                livereload : true
            } // options
        }// watch
    });// init config

    grunt.registerTask( 'default', [ 'watch' ]);

};// module