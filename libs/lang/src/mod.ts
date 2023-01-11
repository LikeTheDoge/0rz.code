
import { create } from "@0rz/utils"
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
    id: LangIdentifier = null as any
    types: LangTypes = new Set()
    scope: LangScope = new LangScope()
    libs: LangModule[] = []
}


export class LangNamespace {
    static create(key: string) {
        return create(new LangNamespace(), { key })
    }
    key: string = ''

    type(name: string) {
        return create(new LangIdentifier(), {
            name,
            namespace: this,
            kind: 'type'
        })
    }

    mod(name: string) {
        return create(new LangIdentifier(), {
            name,
            namespace: this,
            kind: 'module'
        })
    }

    native(name: string) {
        return create(new LangIdentifier(), {
            name,
            namespace: this,
            kind: 'native'
        })
    }
}

export class LangIdentifier {
    namespace: LangNamespace = LangNamespace.create('')
    name: string = ''
    kind: string = ''
}

export const namespace_lang = LangNamespace.create('lang')