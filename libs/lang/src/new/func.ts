import { create, fromJson, json, toJson } from "@0rz/utils"
import { LangStaticId, namespace_lang } from "./namespace"
import { LangType, LangTypeRef, LangTypes, LangValue } from "./type"


export abstract class LangFunction extends LangValue {
    argus: [string, LangTypes][] = []
    result: LangTypes = new Set()
}

export const TYPE_LANG_NATIVE_FUNCTION = create(new LangType(), {
    id: namespace_lang.type('native'),
    // equal: () => false
})

@json(
    'lang-value-native',
    (json: any) => {
        const { nativeId } = json
        return create(new LangNativeFunction, {
            nativeId: fromJson<LangStaticId>(nativeId)
        })
    },
    (ins: LangNativeFunction) => {
        const { nativeId, argus, result } = ins
        return { 
            nativeId: toJson(nativeId),
            argus: argus.map(([name,types])=>{
                return {
                    name,types:Array.from(types).map(type=>toJson(type))
                }
            }),
            result:Array.from(result).map(type=>toJson(type))
        }
    }
)
export class LangNativeFunction extends LangFunction {
    type: LangTypeRef = TYPE_LANG_NATIVE_FUNCTION.ref()
    nativeId: LangStaticId = null as any
}
export const TYPE_LANG_CUSTOM_FUNCTION = create(new LangType(), {
    id: namespace_lang.type('native'),
    // equal: () => false
})