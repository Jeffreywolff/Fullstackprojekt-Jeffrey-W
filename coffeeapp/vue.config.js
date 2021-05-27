module.export = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/scss/variables.scss";
                @import "@/scss/mixins.scss";
                @import "@/scss/functions.scss";
                `
            }
        }
    }
};