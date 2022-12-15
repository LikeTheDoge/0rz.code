import { callExpression } from "@babel/types"

export class Error {

    static typeError(): never {
        throw new Error()
    }
}


export class StaticFeature {
    key: string = ''
}

export class OrType extends StaticFeature {
    fromJson: (input: any) => OrValue = () => { throw new Error() }
    toJson: (value: OrValue) => any = () => { throw new Error() }
}

export class OrValue {
    type: OrType = new OrType()
}

export class OrScope extends StaticFeature {
    values: Map<string, OrValue> = new Map()
}

export class OrModule extends StaticFeature {
    types: OrType[] = []
    scope: OrScope = new OrScope()
}

export class OrFunc extends StaticFeature {
    argus: [string, OrType][] = []
    scope: OrScope = new OrScope()
}


const TYPE_JSON_STRING = Object.assign(new OrType(), {
    key: 'string',
    fromJson: (input: any) => {
        if (typeof input === 'string') {
            return new ValueJsonString(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: ValueJsonString) => {
        return input.value
    }
})

class ValueJsonString extends OrValue {
    type: OrType = TYPE_JSON_STRING
    value: string = ''

    constructor(value: string) {
        super()
        this.value = value
    }
}

const TYPE_JSON_NUMBER = Object.assign(new OrType(), {
    key: 'number',
    fromJson: (input: any) => {
        if (typeof input === 'number') {
            return new ValueJsonNumber(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: ValueJsonNumber) => {
        return input.value
    }
})

class ValueJsonNumber extends OrValue {
    type: OrType = TYPE_JSON_NUMBER
    value: number = 0

    constructor(value: number) {
        super()
        this.value = value
    }
}

const TYPE_JSON_BOOLEAN = Object.assign(new OrType(), {
    key: 'boolean',
    fromJson: (input: any) => {
        if (typeof input === 'boolean') {
            return new ValueJsonBoolean(input)
        } else {
            return Error.typeError()
        }
    },
    toJson: (input: ValueJsonBoolean) => {
        return input.value
    }
})

class ValueJsonBoolean extends OrValue {
    type: OrType = TYPE_JSON_BOOLEAN
    value: boolean = false

    constructor(value: boolean) {
        super()
        this.value = value
    }
}

const TYPE_JSON_NUll = Object.assign(new OrType(), {
    key: 'number',
    fromJson: () => {
        return new ValueJsonNull()
    },
    toJson: () => {
        return null
    }
})

class ValueJsonNull extends OrValue {
    type: OrType = TYPE_JSON_NUll
}


const JSON_MOD = new OrModule()
const JSON_SCOPE = new OrScope()

Object.assign(JSON_MOD, {
    scope: JSON_SCOPE,
    types: [
        TYPE_JSON_STRING, 
        TYPE_JSON_NUMBER , 
        TYPE_JSON_BOOLEAN, 
        TYPE_JSON_NUll
    ]
})


