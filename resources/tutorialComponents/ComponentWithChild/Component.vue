<template lang="pug">
    include Template
</template>

<script>
    export default {
        data() {
            return {
                textComponentSection: {
                    type: 'text-content',
                    data: {
                        title: 'Basic component',
                        content: 'This is a basic text component with a title and a description'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
