import { Error } from "@0rz/utils"
import { LangIdentifier } from "./mod"


export class LangType {
    static of(...types: LangType[]): LangTypes { return new Set(types) }

    id: LangIdentifier = null as any
    fromJson: (input: any) => LangValue = () => { throw new Error() }
    toJson: (value: LangValue) => any = () => { throw new Error() }
    equal: (v1: LangValue, v2: LangValue) => boolean = () => false
}

export abstract class LangValue { abstract type: LangType }

export type LangTypes = Set<LangType>
