import { create } from '@0rz/utils'
import { LangNativeFunction, LangType } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NULL, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'
import { namespace_json } from '../namespace'

export const concat = create(new LangNativeFunction(), {
    nativeId: namespace_json.native('num.concat'),
    argus: [
        ['a', LangType.of(TYPE_JSON_STRING)],
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_STRING)
})

export const equal = create(new LangNativeFunction(), {
    nativeId: namespace_json.native('num.equal'),
    argus: [
        ['a', LangType.of(TYPE_JSON_STRING)],
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const to_num = create(new LangNativeFunction(), {
    nativeId: namespace_json.native('num.to_num'),
    argus: [
        ['b', LangType.of(TYPE_JSON_STRING)],
    ],
    result: LangType.of(TYPE_JSON_NULL, TYPE_JSON_NUMBER)
})