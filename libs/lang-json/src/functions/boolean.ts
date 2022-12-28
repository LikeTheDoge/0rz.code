import { create } from '@0rz/utils'
import { LangNativeFunction ,LangType} from '@0rz/lang'
import { TYPE_JSON_BOOLEAN } from '../value'

export const equal = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const not = create(new LangNativeFunction(), {
    argus: [
        ['val', LangType.of(TYPE_JSON_BOOLEAN)]
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const or = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})

export const and = create(new LangNativeFunction(), {
    argus: [
        ['a', LangType.of(TYPE_JSON_BOOLEAN)],
        ['b', LangType.of(TYPE_JSON_BOOLEAN)],
    ],
    result: LangType.of(TYPE_JSON_BOOLEAN)
})