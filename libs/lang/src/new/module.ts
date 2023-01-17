import { create, fromJson, json, JsonValue, toJson } from "@0rz/utils"
import { LangStaticId } from "./namespace"
import { LangTypes, LangValue, LangType } from "./type"

@json<LangScope>(
    'lang-scope',
    (json: any) => {
        const { id, values } = json
        return create(new LangScope(), {
            id: fromJson<LangStaticId>(id),
            values: values.reduce((
                map: Map<string, { def: LangValue, type: LangTypes }>,
                { name, types, def }: {
                    name: string,
                    types: JsonValue[],
                    def: JsonValue
                }) => {

                map.set(name, {
                    def: fromJson<LangValue>(def),
                    type: LangType.of(...types.map(json => fromJson<LangType>(json)))
                })

            }, new Map())
        })
    },
    (ins: LangScope) => {
        const { id, values } = ins

        return {
            id: toJson(id),
            values: Array.from(values.entries()).map(([name, value]) => {
                return {
                    name,
                    types: Array.from(value.type).map(type => toJson(type)),
                    def: toJson(value.def)
                }
            })

        }
    }
)
export class LangScope {
    id: LangStaticId = null as any
    values: Map<string, { def: LangValue, type: LangTypes }> = new Map()
}

@json<LangModule>(
    'lang-module',
    (json: any) => {
        const { id, use, scope, types } = json as { id: JsonValue, use: JsonValue[], scope: JsonValue, types: JsonValue[] }
        return create(new LangModule(), {
            id: fromJson<LangStaticId>(id),
            use: use.map((v: any) => fromJson<LangModuleRef>(v)),
            scope: fromJson<LangScope>(scope),
            types: LangType.of(...types.map(json => fromJson<LangType>(json)))
        })
    },
    (ins: LangModule) => {
        const { id, use, scope, types } = ins
        return {
            id: toJson(id),
            use: use.map(v => toJson(v)),
            scope: toJson(scope),
            types: Array.from(types).map(type => toJson(type))
        }
    }
)
export class LangModule {
    id: LangStaticId = null as any
    use: LangModuleRef[] = []
    scope: LangScope = null as any
    types: LangTypes = new Set()
}

@json<LangModuleRef>(
    'lang-module-ref',
    (json: any) => {
        const { modId } = json
        return create(new LangModuleRef(), {
            modId: fromJson<LangStaticId>(modId)
        })
    },
    (ins: LangModuleRef) => {
        const { modId } = ins
        return { modId: toJson(modId) }
    }
)
export class LangModuleRef {
    modId: LangStaticId = null as any
}