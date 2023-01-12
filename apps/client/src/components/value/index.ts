import type { Component } from "vue";
import type { LangType } from '@0rz/lang'
import ValueUnknownRender from './RenderUnknown.vue'

export const value_render: { [key: string]: Component } = {}

export const regist = ( type: LangType, render: Component) => {
    const type_name = type.id.kind + '/r/n' + type.id.name + '/r/n'  + type.id.namespace.key
    value_render[type_name] = render
}
export const fetch = ( type: LangType) => {
    const type_name = type.id.kind + '/r/n' + type.id.name + '/r/n'  + type.id.namespace.key
    const component = value_render[type_name] ?? ValueUnknownRender
    return component
}