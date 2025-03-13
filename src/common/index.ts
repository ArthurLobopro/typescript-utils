export async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function compare(v1: number | string, v2: number | string) {
    if (v1 > v2) return 1
    if (v2 > v1) return -1

    return 0
}

export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomItem(arr: any[]) {
    return arr[randomInt(0, arr.length - 1)]
}