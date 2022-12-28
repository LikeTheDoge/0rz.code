import { Error } from "@0rz/utils"


export class LangType {
    static create(mod: string, ...keys: string[]) {
        return `${mod}#${keys.join('-')}`
    }
    static of(...types: LangType[]): LangTypes { return new Set(types) }

    static all: Map<string, LangType> = new Map()
    name: string
    constructor(name: string) {
        this.name = name
        if (LangType.all.has(name)) {
            Error.typeError()
        } else {
            LangType.all.set(name, this)
        }
    }
    fromJson: (input: any) => LangValue = () => { throw new Error() }
    toJson: (value: LangValue) => any = () => { throw new Error() }
    equal: (v1: LangValue, v2: LangValue) => boolean = () => false
}

export abstract class LangValue { abstract type: LangType }

export type LangTypes = Set<LangType>
