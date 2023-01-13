import { create, fromJson, json, toJson } from "@0rz/utils"

@json<LangNamespace>(
    'lang-namespace',
    (json: any) => {
        const key = json.key || ''
        return LangNamespace.create(key)
    },
    (ins: LangNamespace) => {
        const key = ins.key
        return { key }
    }
)
export class LangNamespace {
    static create(key: string) {
        return create(new LangNamespace(), { key })
    }
    key: string = ''

    type(name: string) {
        return create(new LangStaticId(), {
            name,
            namespace: this,
            kind: 'type'
        })
    }

    mod(name: string) {
        return create(new LangStaticId(), {
            name,
            namespace: this,
            kind: 'module'
        })
    }

    native(name: string) {
        return create(new LangStaticId(), {
            name,
            namespace: this,
            kind: 'native'
        })
    }
}

@json<LangStaticId>(
    'lang-static-id',
    (json: any) => {
        const { kind, name, ns } = json
        const namespace = fromJson<LangNamespace>(ns)
        return create(new LangStaticId(), { kind, name, namespace })
    },
    (ins: LangStaticId) => {
        const { kind, name, namespace } = ins
        const ns = toJson(namespace)
        return { kind, name, ns }
    }
)
export class LangStaticId {
    namespace: LangNamespace = LangNamespace.create('')
    kind: string = ''
    name: string = ''

    toString() {
        return [this.namespace.key, this.kind, this.name].join('>])')
    }

    static from() {

    }
}

@json<LangType>(
    'lang-type',
    (json: any) => {
        const { id } = json
        return create(new LangType(), {
            id: fromJson<LangStaticId>(id)
        })
    },
    (ins: LangType) => {
        const { id } = ins
        return { id: toJson(id) }
    }
)
export class LangType {
    static of(...types: LangType[]): LangTypes { return new Set(types) }
    id: LangStaticId = null as any
    ref() {
        return create(new LangTypeRef(), { typeId: this.id })
    }
}

@json<LangTypeRef>(
    'lang-type-ref',
    (json: any) => {
        const { typeId } = json
        return create(new LangTypeRef(), {
            typeId: fromJson<LangStaticId>(typeId)
        })
    },
    (ins: LangTypeRef) => {
        const { typeId } = ins
        return { typeId: toJson(typeId) }
    }
)
export class LangTypeRef {
    typeId: LangStaticId = null as any
}


export abstract class LangValue {
    abstract type: LangTypeRef
    equal: (v1: LangValue, v2: LangValue) => boolean = () => false
}

export type LangTypes = Set<LangType>

export const namespace_lang = LangNamespace.create('lang')