export const create =
    <T extends Object>(model: T, config: Partial<T>): T =>
        Object.assign(model, config) 