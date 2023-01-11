import { create } from '@0rz/utils'
import { LangNativeFunction ,LangType} from '@0rz/lang'
import { TYPE_JSON_BOOLEAN } from '../value'
import { namespace_json } from '../namespace'

export const equal = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('boolean.equal'),
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const not = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('boolean.not'),
    argus: [
        ['val', LangType.of(TYPE_JSON_BOOLEAN)]
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const or = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('boolean.or'),
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const and = create(new LangNativeFunction(), {
    nativeId:namespace_json.native('boolean.and'),
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})