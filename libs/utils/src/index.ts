export const create =
    <T extends Object>(model: T, config: Partial<T>): T =>
        Object.assign(model, config)

export class Error {
    static typeError(): never {
        throw new Error()
    }
}