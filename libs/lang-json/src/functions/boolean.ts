import { create } from '@0rz/utils'
import { OrNativeFunction } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN } from '../value'

export const equal = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_BOOLEAN]],
        ['b', [TYPE_JSON_BOOLEAN]],
    ],
    result: [TYPE_JSON_BOOLEAN]
})

export const not = create(new OrNativeFunction(), {
    argus: [
        ['val', [TYPE_JSON_BOOLEAN]]
    ],
    result: [TYPE_JSON_BOOLEAN]
})

export const or = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_BOOLEAN]],
        ['b', [TYPE_JSON_BOOLEAN]],
    ],
    result: [TYPE_JSON_BOOLEAN]
})

export const and = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_BOOLEAN]],
        ['b', [TYPE_JSON_BOOLEAN]],
    ],
    result: [TYPE_JSON_BOOLEAN]
})