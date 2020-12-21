export function sleeper<T>(ms: number): (t: T) => Promise<T> {
    return (t: T) => {
        return new Promise<T>(resolve => {
            setTimeout(() => resolve(t), ms)
        })
    }
}

