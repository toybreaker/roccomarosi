module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({

        wd: '<%= grunt.task.current.args[0] || "grunt" %>/src/images',

        // grunt responsive_images:dev:grunt
        // grunt responsive_images:dev:lazyload
        responsive_images: {
            dev: {
                options: {
                    sizes: [
                        {
                            width: 320
                        },
                        {
                            width: 640
                        },
                        {
                            width: 1024
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= wd %>',
                    src: '*.{jpg,png}',
                    dest: '/src/images_generated'
                }]
            }
        }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-responsive-images');

    // Default Task
    grunt.registerTask('default', ['responsive_images:dev:grunt', 'responsive_images:dev:lazyload']);

};
