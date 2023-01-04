import { LangType, LangValue } from '@0rz/lang'
import { create, Error } from '@0rz/utils'

export const TYPE_JSON_STRING = create(new LangType(LangType.create('JSON', 'STRING')), {
    fromJson: (input: any) => {
        if (typeof input === 'string') {
            return new ValueJsonString(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: LangValue) => {
        if (input instanceof ValueJsonString) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: LangValue, v2: LangValue) => {
        if (v1 instanceof ValueJsonString && v2 instanceof ValueJsonString) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})

export class ValueJsonString extends LangValue {
    type: LangType = TYPE_JSON_STRING
    value: string = ''

    constructor(value: string) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_NUMBER = create(new LangType(LangType.create('JSON', 'NUMBER')), {
    fromJson: (input: any) => {
        if (typeof input === 'number') {
            return new ValueJsonNumber(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: LangValue) => {
        if (input instanceof ValueJsonNumber) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: LangValue, v2: LangValue) => {
        if (v1 instanceof ValueJsonNumber && v2 instanceof ValueJsonNumber) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})

export class ValueJsonNumber extends LangValue {
    type: LangType = TYPE_JSON_NUMBER
    value: number = 0

    constructor(value: number) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_BOOLEAN = create(new LangType(LangType.create('JSON', 'BOOLEAN')), {
    fromJson: (input: any) => {
        if (typeof input === 'boolean') {
            return new ValueJsonBoolean(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: LangValue) => {
        if (input instanceof ValueJsonNumber) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: LangValue, v2: LangValue) => {
        if (v1 instanceof ValueJsonBoolean && v2 instanceof ValueJsonBoolean) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})

export class ValueJsonBoolean extends LangValue {
    type: LangType = TYPE_JSON_BOOLEAN
    value: boolean = false

    constructor(value: boolean) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_NULL = create(new LangType(LangType.create('JSON', 'NUll')), {
    fromJson: () => {
        return new ValueJsonNull()
    },
    toJson: () => {
        return null
    },
    equal: (v1: LangValue, v2: LangValue) => {
        if (v1 instanceof ValueJsonNull && v2 instanceof ValueJsonNull) {
            return true
        } else {
            return false
        }
    }
})

export class ValueJsonNull extends LangValue {
    type: LangType = TYPE_JSON_NULL
}


