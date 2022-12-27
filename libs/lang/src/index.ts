export class StaticFeature {
    key: string = ''
}


export type OrMuliType = OrType[]

export class OrType extends StaticFeature {
    fromJson: (input: any) => OrValue = () => { throw new Error() }
    toJson: (value: OrValue) => any = () => { throw new Error() }
    equal: (v1: OrValue, v2: OrValue) => boolean = () => false
}


export class OrValue {
    type: OrType = new OrType()
}

export class OrScope extends StaticFeature {
    types: Map<string, OrMuliType> = new Map()
    values: Map<string, OrValue> = new Map()
}

export class OrModule extends StaticFeature {
    types: OrType[] = []
    scope: OrScope = new OrScope()
}

export abstract class OrFunction extends StaticFeature {
    abstract isNative: boolean
    argus: [string, OrMuliType][] = []
    result?: OrMuliType
    scope: OrScope = new OrScope()
}

export class OrNativeFunction extends OrFunction {
    isNative = true
}

export class OrCustomFunction extends OrFunction {
    isNative = false
    body: OrExpression = new OrExpressionList()
}

export abstract class OrExpression {
    type: OrMuliType = []
}

export class OrReturn extends OrExpression {

}

export class OrSetter extends OrExpression {
    key: string = ''
    scope: OrScope = new OrScope()
    value: OrExpression = new OrExpressionList()
}

export class OrGetter extends OrExpression {
    key: string = ''
    scope: OrScope = new OrScope()
}

export class OrExpressionList extends OrExpression {
    list: OrExpression = new OrExpressionList()
}

export class OrMatchValue extends OrExpression {
    list: [OrValue, OrExpression][] = []
    else: OrExpression = new OrExpressionList()
}

export class OrMatchType extends OrExpression {
    list: [OrType, OrExpression][] = []
    else: OrExpression = new OrExpressionList()
}

export class OrValueLoop extends OrExpression {
    value: OrValue = new OrValue
    cond: OrExpression = new OrExpressionList()
    body: OrExpression = new OrExpressionList()
}


