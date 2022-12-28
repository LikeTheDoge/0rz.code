
import { LangTypes, LangValue } from "./type"

export class LangScope{
    types: Map<string, LangTypes> = new Map()
    values: Map<string, LangValue> = new Map()
}

export class LangModule{
    types: LangTypes = new Set()
    scope: LangScope = new LangScope()
}