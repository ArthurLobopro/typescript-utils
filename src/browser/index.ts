export * from "../common"

export function copy(text: string) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copiado para área de transferência!"))
}

export function removeQueryUrl() {
    const url = window.location.href
    window.history.pushState({}, document.title, url.split('?')[0])
}

export function $<T extends HTMLElement>(
    q: string,
    c: Element = document as any,
) {
    return c.querySelector(q) as T
}

export function $$<T extends HTMLElement>(
    q: string,
    c: Element = document as any,
) {
    return Array.from(c.querySelectorAll(q)) as T[]
}

export function once(el: Element, evt: keyof ElementEventMap): Promise<any>
export function once(el: Element, evt: string) {
    return new Promise((done) =>
        el.addEventListener(evt, done, { once: true }),
    )
}