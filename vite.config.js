import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default {
    server: {
        host: "localhost",
        port: 8000
    },
    // URL base for production
    // base: "/adr-manager/",
     base: "./",
    // required for Vuetify (see https://github.com/vuetifyjs/vuetify/discussions/4068#discussioncomment-1357093)
    resolve: {
        alias: {
            vue: "vue/dist/vue.runtime.esm.js"
        },
        dedupe: ["vue", "vuetify"]
    },
    plugins: [
        createVuePlugin(),
        Components({
            resolvers: [VuetifyResolver()]
        })
    ]
};
