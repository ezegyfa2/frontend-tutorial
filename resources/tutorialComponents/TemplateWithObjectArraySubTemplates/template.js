export default {
    type: 'main-template',
    data: {
        upper_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_components": [
                    {
                        title: "Header left",
                        description: "This is a content on the left side"
                    },
                    {
                        title: "Header center",
                        description: "This is a content on center"
                    },
                    {
                        title: "Header right",
                        description: "This is a content on the right side"
                    }
                ]
            }
        },
        middle_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_components": [
                    {
                        title: "Header left",
                        description: "This is a content on the left side"
                    }
                ]
            }
        },
        bottom_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_components": [
                    {
                        title: "Header left",
                        description: "This is a content on the left side"
                    }
                ]
            }
        }
    }
}
