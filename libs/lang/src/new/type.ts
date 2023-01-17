import { create, fromJson, json, toJson } from "@0rz/utils"
import { LangStaticId } from "./namespace"

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
    // equal: (v1: LangValue, v2: LangValue) => boolean = () => false
}

export type LangTypes = Set<LangType>