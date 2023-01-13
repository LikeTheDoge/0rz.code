
export type JsonItem = string | number | null | boolean
    | Array<JsonItem>
    | { [key: string]: JsonItem }
export type JsonValue = { key: string, value: JsonItem }

type transfrom = {
    key: string,
    from: (a: JsonItem) => any,
    to: (t: any) => JsonItem
}

const globe = <T>(name: string, value: T) => {
    const g = globalThis as any
    if (g[name]) return g[name] as T
    else return g[name] = value
}

const key2transfrom = globe<Map<string, transfrom>>('key2transfrom', new Map())
const cls2transfrom = globe<Map<Function, transfrom>>('cls2transfrom', new Map())

export const json = <T>(
    key: string,
    from: (a: JsonItem) => T,
    to: (t: T) => JsonItem
) => (constructor: Function) => {
    cls2transfrom.set(constructor, { key, from, to })
    key2transfrom.set(key, { key, from, to })
}

export const fromJson = <T >(val: JsonValue) => {
    const { key, value } = val
    const transfrom = key2transfrom.get(key)
    if (!transfrom) throw new Error()
    return transfrom.from(value) as T
}

export const toJson = (target: any): JsonValue => {
    const cls = Object.getPrototypeOf(target).constructor
    const transfrom = cls2transfrom.get(cls)
    if (!transfrom) throw new Error()
    return {
        key: transfrom.key,
        value: transfrom.to(target)
    }
}