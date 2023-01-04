
import { LangTypes, LangValue } from "./type"

export class LangScope {
    static values(vals: [string, LangValue][]) {
        const map: Map<string, LangValue> = new Map()
        vals.map(([name, val]) => {
            map.set(name, val)
        })
        return map
    }
    values: Map<string, LangValue> = new Map()
}

export class LangModule {
    name: string = ''
    types: LangTypes = new Set()
    scope: LangScope = new LangScope()
    libs: LangModule[] = []
}