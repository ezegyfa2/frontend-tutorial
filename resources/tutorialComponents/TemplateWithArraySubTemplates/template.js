export default {
    type: 'main-template',
    data: {
        upper_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_component_titles": [
                    "Header left",
                    "Header center",
                    "Header right"
                ]
            }
        },
        middle_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_component_titles": [ "Content" ]
            }
        },
        bottom_component_section: {
            "template_path": "subComponent",
            "params": {
                "sub_component_titles": [ "Footer" ]
            }
        }
    }
}
