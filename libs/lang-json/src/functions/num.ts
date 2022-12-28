import { create } from '@0rz/utils'
import { LangNativeFunction,LangType  } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'

export const add = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const sub = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const mul = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const del = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const equal = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const to_string = create(new LangNativeFunction(), {
    argus: [
        ['val', LangType.of(TYPE_JSON_NUMBER)]
    ],
    result: LangType.of(TYPE_JSON_STRING)
})

