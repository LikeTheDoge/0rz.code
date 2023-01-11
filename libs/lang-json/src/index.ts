import { LangModule, LangScope, LangType } from "@0rz/lang"
import { create } from '@0rz/utils'
import * as num from "./functions/num"
import * as string from "./functions/string"
import * as boolean from "./functions/boolean"

import { TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NULL } from './value'

import { ValueJsonBoolean, ValueJsonNull, ValueJsonNumber, ValueJsonString } from './value'
import { namespace_json } from "./namespace"

export const json = create(new LangModule(), {
    id:namespace_json.mod('json'),
    scope: create(new LangScope(), {
        values: LangScope.values([
            ['num.equal', num.equal],
            ['num.to_string', num.to_string],
            ['num.add', num.add],
            ['num.sub', num.sub],
            ['num.mul', num.mul],
            ['num.del', num.del],

            ['string.equal', string.equal],
            ['string.to_num', string.to_num],
            ['string.concat', string.concat],

            ['boolean.equal', boolean.equal],
            ['boolean.not', boolean.not],
            ['boolean.and', boolean.and],
            ['boolean.or', boolean.or],
        ])
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




