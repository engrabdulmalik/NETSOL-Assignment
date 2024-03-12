// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routes: [
    { path: "/", component: "pages/index.vue" },
    { path: "/en-US", component: "pages/en-US.vue" },
    { path: "/en-UK", component: "pages/en-UK.vue" },
    { path: "/en-China", component: "pages/en-China.vue" },
    { path: "/en-Pakistan", component: "pages/en-Pakistan.vue" },
  ],
});
