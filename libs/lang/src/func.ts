import { create } from "@0rz/utils";
import { LangIdentifier, LangScope, namespace_lang } from "./mod";
import { LangType, LangTypes, LangValue } from "./type";



export abstract class LangFunction extends LangValue {
    argus: [string, LangTypes][] = []
    result: LangTypes = new Set()
}

export const TYPE_LANG_NATIVE_FUNCTION = create(new LangType(), {
    id: namespace_lang.type('native'),
    // todo
    fromJson: () => null as any,
    toJson: () => null as any,
    equal: () => false
})

export class LangNativeFunction extends LangFunction {
    static all: Map<string, Function> = new Map()
    static set(key: string, func: Function) { LangNativeFunction.all.set(key, func) }
    static get(key: string) { return LangNativeFunction.all.get(key) }

    type: LangType = TYPE_LANG_NATIVE_FUNCTION
    nativeId: LangIdentifier = null as any
}

export const TYPE_LANG_FUNCTION = create(new LangType(), {
    id: namespace_lang.type('function'),
    // todo
    fromJson: () => null as any,
    toJson: () => null as any,
    equal: () => false
})

export class LangCustomFunction extends LangFunction {
    scope: LangScope = new LangScope()
    body: LangExpr = new LangExprList()
    type: LangType = TYPE_LANG_FUNCTION
}

export type LangExpr = LangValue | LangStatement

export abstract class LangStatement {
    key: string = ''
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


