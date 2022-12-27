import { create } from '@0rz/utils'
import { OrNativeFunction } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'

export const add = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_NUMBER]],
        ['b', [TYPE_JSON_NUMBER]],
    ],
    result: [TYPE_JSON_NUMBER]
})

export const sub = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_NUMBER]],
        ['b', [TYPE_JSON_NUMBER]],
    ],
    result: [TYPE_JSON_NUMBER]
})

export const mul = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_NUMBER]],
        ['b', [TYPE_JSON_NUMBER]],
    ],
    result: [TYPE_JSON_NUMBER]
})

export const del = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_NUMBER]],
        ['b', [TYPE_JSON_NUMBER]],
    ],
    result: [TYPE_JSON_NUMBER]
})

export const equal = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_NUMBER]],
        ['b', [TYPE_JSON_NUMBER]],
    ],
    result: [TYPE_JSON_BOOLEAN]
})

export const to_string = create(new OrNativeFunction(), {
    argus: [
        ['val', [TYPE_JSON_NUMBER]]
    ],
    result: [TYPE_JSON_STRING]
})

