export default {
    set(key, value) {
        localStorage.setItem(key, value)
    },

    get(key) {
        return localStorage.getItem(key) || null
    },

    remove(key) {
        localStorage.removeItem(key)
    },

    removeAll() {
        localStorage.clear()
    }
}