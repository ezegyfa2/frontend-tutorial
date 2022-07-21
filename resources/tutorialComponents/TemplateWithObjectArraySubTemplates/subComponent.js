export default {
    type: 'component-with-array-child',
    data: {
        text_component_sections: {
            array_data: 'sub_components',
            type: 'text-content',
            data: {
                title: '++sub_components.title',
                content: '++sub_components.description'
            }
        }
    }
}
