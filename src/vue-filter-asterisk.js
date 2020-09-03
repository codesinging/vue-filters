import Vue from 'vue'

const asterisk = (value, from, length) => {
    if (value) {
        const len = value.length

        let begin = value.slice(0, from)
        let center = '*'.repeat(length)
        let end = value.slice(from + length)

        return begin + center + end
    }
    return ''
}

Vue.filter('asterisk', asterisk)
