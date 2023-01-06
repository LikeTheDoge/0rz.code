import { LangScope } from "./mod";
import { LangType, LangTypes, LangValue } from "./type";

export const TYPE_LANG_FUNCTION = new LangType(
    LangType.create('lang', 'function')
)

export abstract class LangFunction extends LangValue{
    abstract isNative: boolean
    type: LangType = TYPE_LANG_FUNCTION
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
    body: LangExpr = new LangExprList()
}

export type LangExpr = LangValue | LangStatement

export abstract class LangStatement {
    key:string = ''
}

export class LangExprList extends LangStatement {
    static key = 'LangExprList'
    key = 'LangExprList'
    list: LangExpr[] = []
}

export class LangReturn extends LangStatement {
    static key = 'LangReturn'
    key = 'LangReturn'
    target: LangExpr = null as any
}

export class LangCall extends LangStatement {
    static key = 'LangCall'
    key = 'LangCall'
    fn: LangExpr = null as any
    inputs: LangExpr[] = []
}

export class LangSetter extends LangStatement {
    static key = 'LangSetter'
    key = 'LangSetter'

    scope: LangScope = null as any
    identifier: string = ''
    value: LangExpr = null as any
}

export class LangGetter extends LangStatement {
    static key = 'LangGetter'
    key = 'LangGetter'
    scope: LangScope = null as any
    identifier: string = ''
    value: LangExpr = null as any
}

export class LangValueMatch extends LangStatement {
    static key = 'LangValueMatch'
    key = 'LangValueMatch'
    list: [LangValue, LangExpr][] = []
    else: LangExpr = null as any
}

export class LangTypeMatch extends LangStatement {
    static key = 'LangTypeMatch'
    key = 'LangTypeMatch'
    list: [LangType, LangExpr][] = []
    else: LangExpr = null as any
}

export class LangValueLoop extends LangStatement {
    static key = 'LangValueLoop'
    key = 'LangValueLoop'

    value: LangValue = null as any
    cond: LangExpr = null as any
    body: LangExpr = null as any
}


