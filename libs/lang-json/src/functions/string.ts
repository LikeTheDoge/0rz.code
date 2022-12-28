import { create } from '@0rz/utils'
import { LangNativeFunction,LangType } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NUll, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'

export const concat = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_STRING)],
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_STRING)
})

export const equal = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_STRING)],
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const to_num = create(new LangNativeFunction(),{
    argus: [
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_NUll,TYPE_JSON_NUMBER)
})