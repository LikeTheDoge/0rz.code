import { LangScope } from "./mod";
import { LangType, LangTypes, LangValue } from "./type";

export const LANG_FUNCTION_TYPE = new LangType(
    LangType.create('lang', 'function')
)

export abstract class LangFunction {
    abstract isNative: boolean
    scope: LangScope = new LangScope()
    argus: [string, LangTypes][] = []
    result: LangTypes = new Set()
}


export class LangNativeFunction extends LangFunction {
    static all: Map<string, Function> = new Map()
    static set(key: string, func: Function) { LangNativeFunction.all.set(key, func) }
    static get(key: string) { return LangNativeFunction.all.get(key) }
    isNative = true
}


export class LangCustomFunction extends LangFunction {
    isNative = false
    body: LangExpression = new LangExpressionList()
}

export type LangExpression = LangValue | LangStatement

export abstract class LangStatement {
}

export class LangExpressionList extends LangStatement {
    list: LangExpression[] = []
}

export class LangReturn extends LangStatement {
    target: LangExpression = null as any
}

export class LangCall extends LangStatement {
    fn: LangFunction = null as any
    inputs: LangExpression[] = []
}

export class LangSetter extends LangStatement {
    scope: LangScope = null as any
    name: string = ''
    value: LangExpression = null as any
}

export class LangGetter extends LangStatement {
    scope: LangScope = null as any
    name: string = ''
    value: LangExpression = null as any
}

export class LangValueMatch extends LangStatement {
    list: [LangValue, LangExpression][] = []
    else: LangExpression = null as any
}

export class LangTypeMatch extends LangStatement {
    list: [LangType, LangExpression][] = []
    else: LangExpression = null as any
}

export class LangValueLoop extends LangStatement {
    value: LangValue = null as any
    cond: LangExpression = null as any
    body: LangExpression = null as any
}


