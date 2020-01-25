const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    


    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                //useShortDoctype: true,
                removeComments: true,
                //conservativeCollapse: true,
                preserveLineBreaks: true,
                collapseWhitespace: true
                
            });
            return minified;
        }

        return content;
    });

    
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");

    
    //eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    
    //////////////////////
    eleventyConfig.addFilter("myFilter", function () {});
    // You can return your Config object (optional).
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats:  ["html", "njk", "md"],
        //pathPrefix: "/docs/",
     
        dir: {
            input: "src",
            output: "docs",

            layouts: "componentes",
            //includes : "base"
            
        }
    };

};