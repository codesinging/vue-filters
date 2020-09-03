import Vue from 'vue'

// Padding zero
const padding = n => {
    return (n < 10 ? '0' : '') + n
}

/**
 * transform the time(seconds) as 'hh:mm:ss' or 'mm:ss' format.
 */
Vue.filter('time', seconds => {
    let s = parseInt(seconds)
    let m = 0
    let h = 0
    if (s > 60) {
        m = Math.floor(s / 60)
        s = s % 60
        if (m > 60) {
            h = Math.floor(m / 60)
            m = m % 60
        }
    }
    let result =  padding(m) + ':' + padding(s)

    if (h > 0) {
        result = padding(h) + ':' + result
    }

    return result
})