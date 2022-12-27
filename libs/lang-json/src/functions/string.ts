import { create } from '@0rz/utils'
import { OrNativeFunction } from '@0rz/lang'
import { TYPE_JSON_BOOLEAN, TYPE_JSON_NUll, TYPE_JSON_NUMBER, TYPE_JSON_STRING } from '../value'

export const concat = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_STRING]],
        ['b', [TYPE_JSON_STRING]],
    ],
    result: [TYPE_JSON_STRING]
})

export const equal = create(new OrNativeFunction(), {
    argus: [
        ['a', [TYPE_JSON_STRING]],
        ['b', [TYPE_JSON_STRING]],
    ],
    result: [TYPE_JSON_BOOLEAN]
})

export const to_num = create(new OrNativeFunction(),{
    argus: [
        ['b', [TYPE_JSON_STRING]],
    ],
    result: [TYPE_JSON_NUll,TYPE_JSON_NUMBER]
})