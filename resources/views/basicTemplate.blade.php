@extends('layouts.app')

@section('content')
    <dynamic-component
        v-bind:component_infos="{ type: 'component-with-child-property', data: { text_component_section: { title: 'Basic component', content: 'This is a basic text component with a title and a description' }}}"
    ></dynamic-component>
@endsection
