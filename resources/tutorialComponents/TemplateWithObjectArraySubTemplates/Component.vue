<script>
    import Template from '@helperVueComponents/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                mainTemplatePath: 'template',
                subTemplates: {
                    template: require('./template').default,
                    subComponent: require('./subComponent').default
                }
            }
        }
    }
</script>
