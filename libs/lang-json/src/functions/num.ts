import { create } from '@0rz/utils'
import { LangNativeFunction,LangType  } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'
import { namespace_json } from '../namespace'

export const add = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.add'),
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const sub = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.sub'),
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const mul = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.mul'),
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const del = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.del'),
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_NUMBER)
})

export const equal = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.equal'),
    argus: [
        ['a', LangType.of(TYPE_JSON_NUMBER)],
        ['b', LangType.of(TYPE_JSON_NUMBER)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const to_string = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('num.to_string'),
    argus: [
        ['val', LangType.of(TYPE_JSON_NUMBER)]
    ],
    result: LangType.of(TYPE_JSON_STRING)
})

