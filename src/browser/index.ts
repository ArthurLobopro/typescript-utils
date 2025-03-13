export * from "../common"

export function copy(text: string) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copiado para área de transferência!"))
}

export function removeQueryUrl() {
    const url = window.location.href
    window.history.pushState({}, document.title, url.split('?')[0])
}