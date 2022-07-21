<script>
    import Template from '@helperVueComponents/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                mainTemplatePath: 'basicTemplate',
                subTemplates: {
                    basicTemplate: require('./basicTemplate').default
                }
            }
        }
    }
</script>
