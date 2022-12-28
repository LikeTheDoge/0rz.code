import { LangModule, LangScope, LangType } from "@0rz/lang"
import { create } from '@0rz/utils'
import { TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NUll } from './value'

export default create(new LangModule(), {
    scope: new LangScope(),
    types: LangType.of(
        TYPE_JSON_STRING,
        TYPE_JSON_NUMBER,
        TYPE_JSON_BOOLEAN,
        TYPE_JSON_NUll
    )
})

