import { OrModule, OrScope } from "@0rz/lang"
import { create } from '@0rz/utils'
import { TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NUll } from './value'

export default create(new OrModule(),{
    scope: new OrScope(),
    types: [
        TYPE_JSON_STRING,
        TYPE_JSON_NUMBER,
        TYPE_JSON_BOOLEAN,
        TYPE_JSON_NUll
    ]
})

