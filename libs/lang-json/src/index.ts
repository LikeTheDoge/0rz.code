import { LangModule, LangScope, LangType, TYPE_LANG_NATIVE_FUNCTION } from "@0rz/lang"
import { create } from '@0rz/utils'
import * as num from "./functions/num"
import * as string from "./functions/string"
import * as boolean from "./functions/boolean"

import { TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NULL } from './value'

import { ValueJsonBoolean, ValueJsonNull, ValueJsonNumber, ValueJsonString } from './value'
import { namespace_json } from "./namespace"

export const json = create(new LangModule(), {
    id: namespace_json.mod('json'),
    scope: create(LangScope.create([
        ['num.equal', num.equal, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['num.to_string', num.to_string, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['num.add', num.add, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['num.sub', num.sub, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['num.mul', num.mul, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['num.del', num.del, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],

        ['string.equal', string.equal, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['string.to_num', string.to_num, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['string.concat', string.concat, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],

        ['boolean.equal', boolean.equal, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['boolean.not', boolean.not, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['boolean.and', boolean.and, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
        ['boolean.or', boolean.or, LangType.of(TYPE_LANG_NATIVE_FUNCTION)],
    ]), {
        key: 'lang-json',
    }),
    types: LangType.of(
        TYPE_JSON_STRING,
        TYPE_JSON_NUMBER,
        TYPE_JSON_BOOLEAN,
        TYPE_JSON_NULL
    )
})


export const functions = {
    num, string, boolean
}

export {
    ValueJsonBoolean, ValueJsonNull, ValueJsonNumber, ValueJsonString
}

export {
    TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NULL
}




