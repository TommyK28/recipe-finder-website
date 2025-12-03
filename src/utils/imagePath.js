const base = import.meta.env.BASE_URL

export function getPublicImagePath(path) {
    return base + path.replace(/^\/+/, '')
}
