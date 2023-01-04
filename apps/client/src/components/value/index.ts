import type { Component } from "vue";
import type { LangModule, LangType } from '@0rz/lang'
import ValueUnknownRender from './ValueUnknownRender.vue'

export const value_render: { [key: string]: Component } = {}

export const regist = ( type: LangType, render: Component) => {
    const type_name = type.name
    value_render[type_name] = render
}
export const fetch = ( type: LangType) => {
    const type_name = type.name
    const component = value_render[type_name] ?? ValueUnknownRender
    return component
}