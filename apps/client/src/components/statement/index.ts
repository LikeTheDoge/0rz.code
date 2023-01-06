import type { Component } from "vue";
import type { LangStatement } from '@0rz/lang'
import StatementUnknownRender from './RenderUnknown.vue'

export const statement_render: { [key: string]: Component } = {}

export const regist = (statement_key: string, render: Component) => {
    statement_render[statement_key] = render
}
export const fetch = (statement: LangStatement) => {
    const statement_key = statement.key
    const component = statement_render[statement_key] ?? StatementUnknownRender
    return component
}