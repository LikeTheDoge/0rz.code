import { OrType, OrValue } from '@0rz/lang'
import { create, Error } from '@0rz/utils'


export class ValueJsonString extends OrValue {
    type: OrType = TYPE_JSON_STRING
    value: string = ''

    constructor(value: string) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_STRING = create(new OrType(), {
    key: 'string',
    fromJson: (input: any) => {
        if (typeof input === 'string') {
            return new ValueJsonString(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: OrValue) => {
        if (input instanceof ValueJsonString) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: OrValue, v2: OrValue) => {
        if (v1 instanceof ValueJsonString && v2 instanceof ValueJsonString) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})


export const TYPE_JSON_NUMBER = create(new OrType(), {
    key: 'number',
    fromJson: (input: any) => {
        if (typeof input === 'number') {
            return new ValueJsonNumber(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: OrValue) => {
        if (input instanceof ValueJsonNumber) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: OrValue, v2: OrValue) => {
        if (v1 instanceof ValueJsonNumber && v2 instanceof ValueJsonNumber) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})

export class ValueJsonNumber extends OrValue {
    type: OrType = TYPE_JSON_NUMBER
    value: number = 0

    constructor(value: number) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_BOOLEAN = create(new OrType(), {
    key: 'boolean',
    fromJson: (input: any) => {
        if (typeof input === 'boolean') {
            return new ValueJsonBoolean(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: OrValue) => {
        if (input instanceof ValueJsonNumber) {
            return input.value
        } else {
            return Error.typeError()
        }
    },
    equal: (v1: OrValue, v2: OrValue) => {
        if (v1 instanceof ValueJsonBoolean && v2 instanceof ValueJsonBoolean) {
            return v1.value === v2.value
        } else {
            return false
        }
    }
})

export class ValueJsonBoolean extends OrValue {
    type: OrType = TYPE_JSON_BOOLEAN
    value: boolean = false

    constructor(value: boolean) {
        super()
        this.value = value
    }
}

export const TYPE_JSON_NUll = create(new OrType(), {
    key: 'number',
    fromJson: () => {
        return new ValueJsonNull()
    },
    toJson: () => {
        return null
    },
    equal: (v1: OrValue, v2: OrValue) => {
        if (v1 instanceof ValueJsonNull && v2 instanceof ValueJsonNull) {
            return true
        } else {
            return false
        }
    }
})

export class ValueJsonNull extends OrValue {
    type: OrType = TYPE_JSON_NUll
}


