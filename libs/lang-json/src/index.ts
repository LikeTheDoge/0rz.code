import { LangModule, LangScope, LangType } from "@0rz/lang"
import { create } from '@0rz/utils'
import * as num from "./functions/num"
import * as string from "./functions/string"
import * as boolean from "./functions/boolean"

import { TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NUll } from './value'

import { ValueJsonBoolean, ValueJsonNull, ValueJsonNumber, ValueJsonString } from './value'

export const json = create(new LangModule(), {
    scope: create(new LangScope(), {
        values: LangScope.values([
            ['num#add', num.add],
            ['num#sub', num.sub],
            ['num#mul', num.mul],
            ['num#del', num.del],
            ['num#equal', num.equal],
            ['num#to_string', num.to_string],

            ['string#concat', string.concat],
            ['string#equal', string.equal],
            ['string#to_num', string.to_num],

            ['boolean#equal', boolean.equal],
            ['boolean#not', boolean.not],
            ['boolean#and', boolean.and],
            ['boolean#or', boolean.or],

        ])
    }),
    types: LangType.of(
        TYPE_JSON_STRING,
        TYPE_JSON_NUMBER,
        TYPE_JSON_BOOLEAN,
        TYPE_JSON_NUll
    )
})


export const functions = {
    num, string, boolean
}

export const values = {
    ValueJsonBoolean, ValueJsonNull, ValueJsonNumber, ValueJsonString
}

export const types = {
    TYPE_JSON_STRING, TYPE_JSON_NUMBER, TYPE_JSON_BOOLEAN, TYPE_JSON_NUll
}




