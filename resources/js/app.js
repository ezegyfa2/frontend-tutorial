require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('text-content', require('./../tutorialComponents/TextContent/Component.vue').default);
Vue.component('component-with-child', require('./../tutorialComponents/ComponentWithChild/Component.vue').default);
Vue.component('component-with-child-property', require('./../tutorialComponents/ComponentWithChildProperty/Component.vue').default);
Vue.component('component-with-array-child', require('./../tutorialComponents/ComponentWithArrayChild/Component.vue').default);
Vue.component('basic-template', require('./../tutorialComponents/BasicTemplate/Component.vue').default);
Vue.component('main-template', require('./../tutorialComponents/MainTemplate/Component.vue').default);
Vue.component('template-with-sub-templates', require('./../tutorialComponents/TemplateWithSubTemplates/Component.vue').default);
Vue.component('template-with-sub-templates-with-params', require('./../tutorialComponents/TemplateWithSubTemplatesWithParams/Component.vue').default);
Vue.component('template-with-array-sub-templates', require('./../tutorialComponents/TemplateWithArraySubTemplates/Component.vue').default);
Vue.component('template-with-object-array-sub-templates', require('./../tutorialComponents/TemplateWithObjectArraySubTemplates/Component.vue').default);

require('helper-vue-components').default.install(Vue);

const app = new Vue({
    el: '#app',
});

