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

    scope(name: string) {
        return create(new LangStaticId(), {
            name,
            namespace: this,
            kind: 'scope'
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
}

export const namespace_lang = LangNamespace.create('lang') 